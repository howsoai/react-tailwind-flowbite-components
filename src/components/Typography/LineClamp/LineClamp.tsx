import { FC } from "react";
import { twMerge } from "tailwind-merge";
import Styles from "./LineClamp.module.css";

export type LineClampProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /** Use 'none' to remove the line clamping */
  lines?: number | "none";
};

export const LineClamp: FC<LineClampProps> = function ({
  lines = 3,
  ...props
}) {
  return (
    <div
      {...props}
      className={twMerge(
        Styles.root,
        "text-ellipsis",
        "overflow-hidden",
        props.className
      )}
      style={{
        ...props.style,
        WebkitLineClamp: lines ? lines : "none",
      }}
    />
  );
};
