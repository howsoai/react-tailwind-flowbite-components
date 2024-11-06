import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import {
  PaginationStatus,
  type PaginationStatusProps,
} from "../PaginationStatus";

export type PaginationBaseProps = PaginationStatusProps & {
  className?: string;
  controls: ReactNode;
};
export const PaginationBase: FC<PaginationBaseProps> = ({
  className,
  controls,
  ...props
}) => {
  const { count = 0, currentPage, loading, pageSize } = props;

  return (
    <div
      className={twMerge(
        "flex flex-col justify-center gap-2 md:flex-row md:items-center md:justify-between md:gap-4",
        className,
      )}
    >
      <PaginationStatus
        count={count}
        currentPage={currentPage}
        loading={loading}
        pageSize={pageSize}
      />
      <div>{controls}</div>
    </div>
  );
};
