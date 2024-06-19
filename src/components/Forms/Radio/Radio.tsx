import {
  Radio as FlowbiteRadio,
  type RadioProps as FlowbiteRadioProps,
  type CheckboxProps as FlowbiteCheckboxProps,
  getTheme,
} from "flowbite-react";
import { type ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

/** A shallow extension of Flowbite's Radio to allow color theming */
export type RadioProps = FlowbiteRadioProps &
  Pick<FlowbiteCheckboxProps, "color">;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ color = "blue", ...props }, ref): ReactNode => {
    const theme = getTheme();

    return (
      <FlowbiteRadio
        {...props}
        className={twMerge(color && theme.checkbox.root.color[color])}
        ref={ref}
      />
    );
  },
);
