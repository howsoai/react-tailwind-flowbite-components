import { FC } from "react";
import { twMerge } from "tailwind-merge";

export type ReadabilityConstraintProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export const ReadabilityConstraint: FC<ReadabilityConstraintProps> = function (
  props
) {
  return (
    <div {...props} className={twMerge("max-w-[65em]", props.className)} />
  );
};
