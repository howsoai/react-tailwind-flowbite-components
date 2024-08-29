import type { ComponentProps, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useStepperItemContext } from "./StepperItemContext";

export type StepperIconProps = ComponentProps<"div"> & {
  children: ReactNode;
};

export const StepperIcon: FC<StepperIconProps> = function ({
  children,
  className,
  ...props
}) {
  const { status } = useStepperItemContext();

  return (
    <div
      className={twMerge(
        "bg-gray-200 text-gray-500 dark:bg-gray-600 dark:text-gray-400",
        "flex items-center justify-center rounded-full p-2 text-2xl",
        // "flex items-center justify-center w-8 h-8 rounded-full shrink-0 border border-gray-500 dark:border-gray-400",
        status === "active" &&
          "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400",
        status === "done" &&
          "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-400",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
