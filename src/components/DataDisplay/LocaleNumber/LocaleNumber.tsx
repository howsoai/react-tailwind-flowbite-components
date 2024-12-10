import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Skeleton, SkeletonProps } from "../../Feedback";

export type LocaleNumberProps = {
  /** A value to be displayed if no value is present when not loading */
  defaultValue?: ReactNode;
  /** Defaults to { maximumFractionDigits: 3 } */
  formatter?: Intl.NumberFormat;
  loading?: boolean;
  skeleton?: SkeletonProps;
  value: number | null | undefined;
};
export const LocaleNumber: FC<LocaleNumberProps> = ({
  defaultValue = "-",
  formatter = defaultIntlNumberFormatter,
  loading = false,
  skeleton,
  value,
}) => {
  if (loading) {
    return (
      <Skeleton
        variant="text"
        className={twMerge("w-28", skeleton?.className)}
      />
    );
  }

  if (value === undefined || value === null) {
    return defaultValue;
  }

  return formatter.format(value);
};

export const defaultIntlNumberFormatter = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 3,
});
