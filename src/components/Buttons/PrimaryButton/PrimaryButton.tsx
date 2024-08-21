import { FC } from "react";
import { Button, type ButtonProps } from "../Button";

export type PrimaryButtonProps = ButtonProps;
/**
 * A convince wrapper setting defaults for Primary buttons and tracking all usages.
 * By default: Primary, filled
 **/
export const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  return <Button color="primary" {...props} />;
};
