import { FC } from "react";
import { twMerge } from "tailwind-merge";

export type FieldContainerProps = React.HTMLAttributes<HTMLDivElement>;
export const FieldContainer: FC<FieldContainerProps> = (props) => (
  <div {...props} className={twMerge("space-y-2", props.className)} />
);
