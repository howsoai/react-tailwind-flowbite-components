import { FC } from "react";
import { twMerge } from "tailwind-merge";

export type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
/**
 * A link designed for use within copy. It highlights accessibility and clarity.
 */
export const Link: FC<LinkProps> = function ({ children, ...props }) {
  return (
    <a
      {...props}
      className={twMerge(
        "text-primary-600 underline dark:text-primary-500",
        props.className
      )}
    >
      {children}
    </a>
  );
};
