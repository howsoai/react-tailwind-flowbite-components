import { Spinner, SpinnerProps } from "flowbite-react";
import type { PolymorphicRef } from "flowbite-react/dist/types/helpers/generic-as-prop";
import { cloneElement, type ElementType, forwardRef } from "react";
import type { IconBaseProps } from "react-icons";
import { twMerge } from "tailwind-merge";
import { Button, type ButtonComponentType, type ButtonProps } from "../Button";

export type IconButtonProps<T extends ElementType = "button"> = ButtonProps<T>;

/**
 * A convince wrapper setting defaults for icon buttons and tracking all usages.
 * By default: Secondary, no borders, rounded
 **/
export const IconButton = forwardRef(
  <T extends ElementType = "button">(
    { children, isProcessing, ...props }: IconButtonProps<T>,
    ref: PolymorphicRef<T>,
  ): JSX.Element => (
    // @ts-expect-error Complicated merge types. Ignoring this.
    <Button
      ref={ref}
      color="secondary"
      pill
      outline
      {...props}
      // Overrides based on https://github.com/themesberg/flowbite-react/blob/main/packages/ui/src/components/Button/theme.ts
      className={twMerge(
        // "px-0, p-0",
        "aspect-square border-none *:px-0 *:py-0 *:leading-none", // Default is md
        props.size === "xs" && "h-8 text-xs",
        props.size === "sm" && "h-9 text-sm",
        props.size === "lg" && "h-12 text-base",
        props.size === "xl" && "h-[52px] text-base",
        !props.size && "h-10",
        props.className,
      )}
    >
      {!isProcessing ? (
        children && cloneElement(children, getIconProps(props.size))
      ) : (
        <Spinner {...getSpinnerProps(props.size)} />
      )}
    </Button>
  ),
) as ButtonComponentType;

const getSpinnerProps = (size: ButtonProps["size"]): SpinnerProps => {
  switch (size) {
    case "xs":
      return { size: "xs" };
    case "sm":
      return { size: "xs" };
    case "lg":
      return { size: "sm" };
    case "xl":
      return { size: "md" };
    default:
      return { size: "sm" };
  }
};

const getIconProps = (size: ButtonProps["size"]): IconBaseProps => {
  switch (size) {
    case "xs":
      return { size: "18px" };
    case "sm":
      return { size: "20px" };
    case "lg":
      return { size: "24px" };
    case "xl":
      return { size: "26px" };
    default:
      return { size: "22px" };
  }
};
