import { Heading, HeadingProps } from "@/components/Typography";
import type { ComponentProps, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useStepperItemContext } from "./StepperItemContext";

export type StepperContentProps = ComponentProps<"div"> & {
  children: ReactNode;
};

const StepperContentComponent: FC<StepperContentProps> = function ({
  children,
  className,
  ...props
}) {
  const { status } = useStepperItemContext();

  return (
    <div
      className={twMerge(
        "text-gray-600 dark:text-gray-400",
        status === "active" && "text-blue-600 dark:text-blue-400",
        status === "done" && "text-green-700 dark:text-green-400",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const StepperContentHeading: FC<Partial<HeadingProps>> = ({
  className,
  ...props
}) => (
  <Heading
    level={4}
    {...props}
    className={twMerge("truncate text-base", className)}
  />
);
const StepperContentDescription: FC<ComponentProps<"p">> = ({
  className,
  ...props
}) => <p {...props} className={twMerge("truncate text-sm", className)} />;

export const StepperContent = Object.assign(StepperContentComponent, {
  Heading: StepperContentHeading,
  Description: StepperContentDescription,
});
