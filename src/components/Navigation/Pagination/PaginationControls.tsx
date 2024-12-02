import {
  Pagination as FlowbitePagination,
  type PaginationProps as FlowbitePaginationProps,
} from "flowbite-react";
import { memo, type FC } from "react";
import { Skeleton } from "../../Feedback";
import { PaginationBase, type PaginationBaseProps } from "./(components)";

export type PaginationControlsProps = Omit<PaginationBaseProps, "controls"> &
  FlowbitePaginationProps & {
    preview?: false;
    totalPages: number | undefined;
  };
export const PaginationControls: FC<PaginationControlsProps> = ({
  marginBottom,
  marginTop,

  pageSize,
  ...props
}) => (
  <PaginationBase
    {...props}
    marginBottom={marginBottom}
    marginTop={marginTop}
    pageSize={pageSize}
    controls={<Controls {...props} />}
  />
);

const Controls: FC<
  FlowbitePaginationProps & Pick<PaginationBaseProps, "loading">
> = memo(({ loading, totalPages, ...props }) => {
  return loading ? (
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
        {...props}
      />
    )
  );
});
