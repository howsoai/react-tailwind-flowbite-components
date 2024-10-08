import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { NewWindowIcon } from "../../Icons";

export type LinkProps = ComponentProps<"a"> & {
  /** Indicates a link that will take the off site. */
  external?: boolean;
};
/**
 * A generic <a> link for use in non-structural contexts.
 * If you need to create your own links, most commonly for React Router
 * use `getLinkProps()`.
 **/
export const Link: FC<LinkProps> = (props) => {
  const { children, ...mergedProps } = getLinkProps(props);
  return <a {...mergedProps}>{children}</a>;
};

/**
 * Returns link props augmented with display standards:
 * - className
 * - External icon in children
 */
export const getLinkProps = ({ external, ...props }: LinkProps): LinkProps => ({
  ...props,
  className: twMerge(linkClasses, props.className),
  children: (
    <>
      {props.children}
      {external && (
        <NewWindowIcon className="inline-block ml-[.25ch] print:hidden" />
      )}
    </>
  ),
});

const linkClasses = "text-primary-600 underline dark:text-primary-400";
