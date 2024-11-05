import {
  Pagination as FlowbitePagination,
  type PaginationProps as FlowbitePaginationProps,
} from "flowbite-react";
import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { Skeleton } from "../../Feedback";
import { PaginationI18nBundle as i18n } from "./Pagination.i18n";

export type PaginationProps = FlowbitePaginationProps & {
  className?: string;
  count?: number;
  loading?: boolean;
  pageSize: number;
};
/** A customized Pagination component that provides result counts and translations */
export const Pagination: FC<PaginationProps> = ({
  className,
  count = 0,
  currentPage,
  loading,
  pageSize,
  totalPages,
  ...props
}) => {
  const { t } = useTranslation(i18n.namespace);
  const start = !loading && count > 0 ? (currentPage - 1) * pageSize + 1 : 0;
  const end =
    !loading && count > 0
      ? currentPage * pageSize < count
        ? currentPage * pageSize
        : count
      : 0;

  return (
    <div
      className={twMerge(
        "flex flex-col justify-center gap-2 md:flex-row md:items-center md:justify-between md:gap-4",
        className,
      )}
    >
      <div className="text-sm">
        <Trans
          t={t}
          i18nKey={i18n.strings.position}
          values={{
            start,
            end,
            total: count,
          }}
          components={{
            strong: loading ? (
              <Skeleton variant="text" className="w-[2ch]" />
            ) : (
              <strong />
            ),
          }}
        />
      </div>
      {loading ? (
        <Skeleton className="h-9 w-full md:w-80" />
      ) : (
        totalPages > 1 && (
          <FlowbitePagination
            typeof="pagination"
            theme={{
              pages: {
                base: "inline-flex items-center -space-x-px",
                selector: {
                  base: "w-auto min-w-8 md:w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                },
              },
            }}
            showIcons
            previousLabel=""
            nextLabel=""
            totalPages={totalPages}
            currentPage={currentPage}
            {...props}
          />
        )
      )}
    </div>
  );
};
