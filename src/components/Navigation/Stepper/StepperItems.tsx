import type { ComponentProps, FC, ReactNode } from "react";

export type StepperItemsProps = ComponentProps<"ol"> & {
  children: ReactNode;
};

/** Provides the ol element for stepper lists */
export const StepperItems: FC<StepperItemsProps> = function ({
  children,
  ...props
}) {
  return <ol {...props}>{children}</ol>;
};
