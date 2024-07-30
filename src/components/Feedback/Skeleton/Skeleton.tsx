import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { SkeletonI18nBundle } from "./Skeleton.i18n";
import { useTranslation } from "react-i18next";

export type SkeletonProps = {
  /** Default: "block" */
  variant?: "block" | "text";
  className?: string;
};
export const Skeleton: FC<SkeletonProps> = ({
  variant = "block",
  ...props
}) => {
  switch (variant) {
    case "block":
      return <BlockSkeleton {...props} />;
    case "text":
      return <TextSkeleton {...props} />;
  }
};

export type BlockSkeletonProps = {
  className?: string;
};
const BlockSkeleton: FC<BlockSkeletonProps> = ({ className }) => {
  const { t } = useTranslation(SkeletonI18nBundle.namespace);

  return (
    <span
      role="status"
      className={twMerge(
        "block min-h-[1lh] animate-pulse rounded bg-gray-200 dark:bg-gray-700",
        className,
      )}
    >
      <span className="sr-only">{t(SkeletonI18nBundle.strings.loading)}</span>
    </span>
  );
};

export type TextSkeletonProps = {
  className?: string;
};
const TextSkeleton: FC<BlockSkeletonProps> = ({ className }) => {
  const { t } = useTranslation(SkeletonI18nBundle.namespace);

  return (
    <span
      role="status"
      className={twMerge(
        "min-h-[.9lh] animate-pulse rounded bg-gray-200 dark:bg-gray-700",
        "inline-block min-w-[1ch] align-middle",
        className,
      )}
    >
      <span className="sr-only">{t(SkeletonI18nBundle.strings.loading)}</span>
    </span>
  );
};
