import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { useDefaultTranslation } from "@/hooks";

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
  const { t } = useDefaultTranslation();

  return (
    <span
      role="status"
      className={twMerge(
        "block min-h-[1lh] rounded animate-pulse bg-gray-200 dark:bg-gray-700",
        className,
      )}
    >
      <span className="sr-only">{t("Feedback.Skeleton.loading")}</span>
    </span>
  );
};

export type TextSkeletonProps = {
  className?: string;
};
const TextSkeleton: FC<BlockSkeletonProps> = ({ className }) => {
  const { t } = useDefaultTranslation();

  return (
    <span
      role="status"
      className={twMerge(
        "min-h-[.9lh] rounded animate-pulse bg-gray-200 dark:bg-gray-700",
        "inline-block align-middle min-w-[1ch]",
        className,
      )}
    >
      <span className="sr-only">{t("Feedback.Skeleton.loading")}</span>
    </span>
  );
};
