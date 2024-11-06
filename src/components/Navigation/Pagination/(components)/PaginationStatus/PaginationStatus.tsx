import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Skeleton } from "../../../../Feedback";
import { PaginationI18nBundle as i18n } from "../../Pagination.i18n";

export type PaginationStatusProps = {
  count: number;
  currentPage: number;
  loading?: boolean;
  pageSize: number;
};
export const PaginationStatus: FC<PaginationStatusProps> = ({
  count,
  currentPage,
  loading,
  pageSize,
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
  );
};
