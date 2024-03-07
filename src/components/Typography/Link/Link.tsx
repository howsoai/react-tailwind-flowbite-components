import { FC } from "react";
import { twMerge } from "tailwind-merge";

export type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
export const Link: FC<LinkProps> = function (props) {
  return (
    <a
      {...props}
      className={twMerge(
        "cursor-pointer text-blue-600 hover:underline dark:text-blue-500",
        props.className
      )}
    />
  );
};
