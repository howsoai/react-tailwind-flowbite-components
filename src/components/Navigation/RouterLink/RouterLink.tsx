import { forwardRef } from "react";
import { LinkProps, useHref, useLinkClickHandler } from "react-router-dom";
import { Link as TailwindLink } from "../../Typography/Link";

export type RouterLinkProps = LinkProps;
/**A link component that mixes @howso/react-tailwind-flowbite-components with react-router-dom*/
export const RouterLink = forwardRef(
  (
    { onClick, replace = false, state, target, to, ...rest }: RouterLinkProps,
    ref,
  ) => {
    const href = useHref(to);
    const handleClick = useLinkClickHandler(to, {
      replace,
      state,
      target,
    });

    return (
      <TailwindLink
        {...rest}
        href={href}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) {
            handleClick(event);
          }
        }}
        // @ts-expect-error Not debugging the code react-router-dom gave me
        ref={ref}
        target={target}
      />
    );
  },
);
