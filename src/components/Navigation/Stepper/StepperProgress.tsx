import { Progress, type ProgressProps } from "flowbite-react";
import type { FC } from "react";

export const StepperProgress: FC<ProgressProps> = (props) => (
  <Progress color="blue" size="sm" {...props} />
);
