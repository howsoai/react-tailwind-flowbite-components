import {
  getTheme,
  Label,
  LabelProps,
  type FlowbiteColors,
} from "flowbite-react";
import type { ComponentProps, ReactNode } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const localTheme: ToggleInputTheme = {
  root: {
    base: "relative inline-flex items-center cursor-pointer",
  },
  toggle: {
    base: "peer border rounded-full after:left-[2px] after:content-[''] after:rounded-full after:transition-all after:bg-white after:border after:border-gray-300 after:absolute peer-focus:outline-none peer-focus:ring-2",
    size: {
      sm: "w-9 h-5 after:h-4 after:w-4 after:top-[1px]",
      md: "w-11 h-6 after:h-5 after:w-5 after:top-[1px]",
      lg: "w-14 h-7 after:h-6 after:w-6 after:top-[1px] after:left-[3px]",
    },
    checked: {
      on: "peer-checked:after:translate-x-full peer-checked:after:border-white",
      off: "bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-600",
      color: {
        blue: "peer-checked:bg-blue-600 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800",
        gray: "peer-checked:bg-gray-600 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800",
        failure:
          "peer-checked:bg-red-600 peer-focus:ring-red-300 dark:peer-focus:ring-red-800",
        success:
          "peer-checked:bg-green-600 peer-focus:ring-green-300 dark:peer-focus:ring-green-800",
        warning:
          "peer-checked:bg-yellow-400 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800",
        info: "peer-checked:bg-cyan-600 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800",
      },
    },
  },
};

export type ToggleInputTheme = {
  root: {
    base: string;
  };
  toggle: {
    base: string;
    size: {
      sm: string;
      md: string;
      lg: string;
    };
    checked: {
      on: string;
      off: string;
      color: ToggleInputColors;
    };
  };
};

export interface ToggleInputColors
  extends Pick<
    FlowbiteColors,
    "gray" | "info" | "failure" | "warning" | "success"
  > {
  [key: string]: string;
}

export interface ToggleInputProps
  extends Omit<ComponentProps<"input">, "type" | "color" | "size" | "ref"> {
  label?: ReactNode;
  labelProps?: LabelProps;
  color?: keyof ToggleInputColors;
  size?: "sm" | "md" | "lg";
}

export const ToggleInput = forwardRef<HTMLInputElement, ToggleInputProps>(
  (
    { className, label, labelProps, size = "md", color = "blue", ...props },
    ref,
  ) => {
    const theme = getTheme();
    return (
      <Label
        role="switch"
        {...labelProps}
        className={twMerge(
          theme.toggleSwitch.root.base,
          localTheme.root.base,
          className,
          labelProps?.className,
        )}
      >
        <input type="checkbox" className="peer sr-only" ref={ref} {...props} />
        <div
          className={twMerge(
            theme.toggleSwitch.toggle.base,
            localTheme.toggle.base,
            localTheme.toggle.size[size],
            localTheme.toggle.checked.off,
            localTheme.toggle.checked.on,
            localTheme.toggle.checked.color[color],
          )}
        />
        <span className="ml-2">{label}</span>
      </Label>
    );
  },
);
