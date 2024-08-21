import { Button } from "flowbite-react";
import { FC } from "react";
import { type ButtonBaseProps } from "../ButtonBase";

export type PrimaryButtonProps = ButtonBaseProps;
/**
 * A convince wrapper setting defaults for Primary buttons and tracking all usages.
 * By default: Blue, filled
 **/
export const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  return <Button color="primary" {...props} />;
};
