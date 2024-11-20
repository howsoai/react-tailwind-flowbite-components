import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

export type PaperProps = ComponentProps<"div">;
/** Provides the background surface without elevation or borders */
export const Paper: FC<PaperProps> = (props) => (
  <div
    {...props}
    className={twMerge("bg-white dark:bg-gray-800", props.className)}
  />
);
