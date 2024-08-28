import { type PolymorphicRef } from "flowbite-react/dist/types/helpers/generic-as-prop";
import { type ElementType, forwardRef } from "react";
import { Button, type ButtonProps } from "../Button";

export type PrimaryButtonProps<T extends ElementType = "button"> =
  ButtonProps<T>;

/**
 * A convince wrapper setting defaults for Primary buttons and tracking all usages.
 * By default: Primary, filled
 **/
export const PrimaryButton = forwardRef(
  <T extends ElementType = "button">(
    { text, ...props }: ButtonProps<T>,
    ref: PolymorphicRef<T>,
  ): JSX.Element => <Button ref={ref} color="primary" {...props} />,
);
