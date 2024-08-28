import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

export type ReadabilityConstraintProps = ComponentProps<"div"> & {
  /** Default: 'div'. If span is selected, className="block" will be included. */
  as?: "div" | "span";
};
export const ReadabilityConstraint: FC<ReadabilityConstraintProps> = function ({
  as = "div",
  ...props
}) {
  const Tag = as === "span" ? "span" : "div";

  return (
    <Tag
      {...props}
      className={twMerge(
        "max-w-[65em]",
        as === "span" && "block",
        props.className,
      )}
    />
  );
};
