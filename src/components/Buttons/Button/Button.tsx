import {
  Button as FlowbiteButton,
  type ButtonProps as FlowbiteButtonProps,
} from "flowbite-react";
import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "flowbite-react/dist/types/helpers/generic-as-prop";
import { forwardRef, type ElementType } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps<T extends ElementType = "button"> =
  PolymorphicComponentPropWithRef<
    T,
    Omit<FlowbiteButtonProps<T>, "color"> & {
      color?:
        | "failure"
        | "info"
        | "secondary"
        | "success"
        | "warning"
        | "primary";
      /** Modifies the border and background elements to be transparent, similar to the outline version */
      text?: boolean;
    }
  >;

export type ButtonComponentType = (<C extends ElementType = "button">(
  props: ButtonProps<C>,
) => JSX.Element) & {
  displayName?: string;
};

/**
 * Howso's specialized <Button /> implementation.
 * - Semantic colors are enforced.
 * - A text prop is applied, triggering semi-transparent mode with outline like interactions
 **/
export const Button = forwardRef(
  <T extends ElementType = "button">(
    { text, ...props }: ButtonProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    return (
      // @ts-expect-error It really hates polymorphic component forwarding
      <FlowbiteButton
        {...props}
        ref={ref}
        outline={text ? true : props.outline}
        className={twMerge(
          text && "border-transparent bg-transparent",
          props.className,
        )}
      />
    );
  },
) as ButtonComponentType;
