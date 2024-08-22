import {
  Button as FlowbiteButton,
  ButtonProps as FlowbiteButtonProps,
} from "flowbite-react";
import type { PolymorphicRef } from "flowbite-react/dist/types/helpers/generic-as-prop";
import { forwardRef, type ElementType } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps<T extends ElementType = "button"> = Omit<
  FlowbiteButtonProps<T>,
  "color"
> & {
  color?: "failure" | "info" | "secondary" | "success" | "warning" | "primary";
  /** Modifies the border and background elements to be transparent, similar to the outline version */
  text?: boolean;
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
  ): JSX.Element => (
    // @ts-expect-error It really hates polymorphic component forwarding
    <FlowbiteButton
      {...props}
      ref={ref}
      outline={text ? true : props.outline}
      className={twMerge(text && "border-transparent bg-transparent")}
    />
  ),
);
