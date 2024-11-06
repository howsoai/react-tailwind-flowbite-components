import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { UX } from "../../../../../constants";
import {
  PaginationStatus,
  type PaginationStatusProps,
} from "../PaginationStatus";

export type PaginationBaseProps = PaginationStatusProps & {
  className?: string;
  controls: ReactNode;
  marginBottom?: boolean;
  marginTop?: boolean;
};
export const PaginationBase: FC<PaginationBaseProps> = ({
  className,
  controls,
  marginBottom,
  marginTop,
  ...props
}) => {
  const { count = 0, currentPage, loading, pageSize } = props;

  return (
    <div
      className={twMerge(
        "flex flex-col justify-center gap-2 md:flex-row md:items-center md:justify-between md:gap-4",
        marginBottom && UX.classes.marginBottom,
        marginTop && UX.classes.marginTop,
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
