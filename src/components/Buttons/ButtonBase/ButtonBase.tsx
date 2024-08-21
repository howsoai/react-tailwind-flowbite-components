import { ButtonProps } from "flowbite-react";

export type ButtonBaseProps = Omit<ButtonProps, "color"> & {
  color?: "failure" | "info" | "secondary" | "success" | "warning" | "primary";
};
