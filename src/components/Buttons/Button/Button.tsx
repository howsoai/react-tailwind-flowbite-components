import {
  Button as FlowbiteButton,
  type ButtonProps as FlowbiteButtonProps,
} from "flowbite-react";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = Omit<FlowbiteButtonProps, "color"> & {
  color?: "failure" | "info" | "secondary" | "success" | "warning" | "primary";
  /** Modifies the border and background elements to be transparent, similar to the outline version */
  text?: boolean;
};

/**
 * Howso's specialized <Button /> implementation.
 * - Semantic colors are enforced.
 * - A text prop is applied, triggering semi-transparent mode with outline like interactions
 **/
export const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <FlowbiteButton
      {...props}
      outline={text ? true : props.outline}
      className={twMerge(text && "border-transparent bg-transparent")}
    />
  );
};
