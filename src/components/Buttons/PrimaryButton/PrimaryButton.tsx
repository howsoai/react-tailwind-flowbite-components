import { Button, ButtonProps } from "flowbite-react";
import { FC } from "react";

export type PrimaryButtonProps = ButtonProps;
/**
 * A convince wrapper setting defaults for Primary buttons and tracking all usages.
 * By default: Blue, filled
 **/
export const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  return <Button color="primary" {...props} />;
};
