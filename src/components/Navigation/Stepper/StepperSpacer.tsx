import type { ComponentProps, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronIcon, type ChevronIconProps } from "../../Icons";
import { useStepperContext } from "./StepperContext";

export type StepperSpacerProps = ComponentProps<"li"> & {
  /** Default: <StepperSpacer.Content /> */
  children?: ReactNode;
};

const StepperSpacerComponent: FC<StepperSpacerProps> = function ({
  children,
  className,
}) {
  return (
    <li className={twMerge("text-gray-500 dark:text-gray-400", className)}>
      {children || <StepperSpacer.Content />}
    </li>
  );
};

const StepperSpacerContent: FC<Omit<ChevronIconProps, "direction">> = (
  props,
) => {
  const { vertical } = useStepperContext();

  return (
    <ChevronIcon
      {...props}
      direction={vertical ? "down" : "right"}
      className={twMerge(vertical && "mx-auto", props.className)}
    />
  );
};

export const StepperSpacer = Object.assign(StepperSpacerComponent, {
  Content: StepperSpacerContent,
});
