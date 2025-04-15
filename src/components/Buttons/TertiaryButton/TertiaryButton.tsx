import { type PolymorphicRef } from "flowbite-react/dist/types/helpers/generic-as-prop";
import { type ElementType, forwardRef } from "react";
import { Button, type ButtonComponentType, type ButtonProps } from "../Button";

export type TertiaryButtonProps<T extends ElementType = "button"> =
  ButtonProps<T>;

/**
 * A convince wrapper setting defaults for Secondary buttons and tracking all usages.
 * By default: Secondary, filled
 **/
export const TertiaryButton = forwardRef(
  <T extends ElementType = "button">(
    props: ButtonProps<T>,
    ref: PolymorphicRef<T>,
  ): JSX.Element => <Button ref={ref} color="tertiary" outline {...props} />,
) as ButtonComponentType;
