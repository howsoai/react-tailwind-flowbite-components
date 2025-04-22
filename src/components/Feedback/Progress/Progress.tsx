import {
  Progress as FlowbiteProgress,
  ProgressProps as FlowbiteProgressProps,
} from "flowbite-react";
import { FC } from "react";

export type ProgressProps = FlowbiteProgressProps;
export const Progress: FC<ProgressProps> = ({
  color = "primary",
  ...props
}) => <FlowbiteProgress {...props} color={color} />;
