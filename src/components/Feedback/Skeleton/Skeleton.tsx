import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { useDefaultTranslation } from "@/hooks";

export type SkeletonProps = {
  className?: string;
};
export const Skeleton: FC<SkeletonProps> = function (props) {
  return <BlockSkeleton {...props} />;
};

export interface BlockSkeletonProps {
  className?: string;
}
const BlockSkeleton: FC<BlockSkeletonProps> = ({ className }) => {
  const { t } = useDefaultTranslation();

  return (
    <div
      role="status"
      className={twMerge(
        "min-h-[1lh] rounded animate-pulse bg-gray-200 dark:bg-gray-700",
        className,
      )}
    >
      <span className="sr-only">{t("Feedback.Skeleton.loading")}</span>
    </div>
  );
};
