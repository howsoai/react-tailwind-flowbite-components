import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { NewWindowIcon } from "../../Icons";

export type LinkProps = ComponentProps<"a"> & { external?: boolean };
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
export const getLinkProps = (props: LinkProps): LinkProps => ({
  className: twMerge(linkClasses, props.className),
  children: (
    <>
      {props.children}
      {props.external && (
        <>
          {" "}
          <NewWindowIcon />
        </>
      )}
    </>
  ),
});

const linkClasses = "text-blue-600 underline dark:text-blue-500";
