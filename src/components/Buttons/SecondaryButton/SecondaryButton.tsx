import { Button, ButtonProps } from "flowbite-react";
import { FC } from "react";

export type SecondaryButtonProps = ButtonProps;
/**
 * A convince wrapper setting defaults for Primary buttons and tracking all usages.
 * By default: Blue, filled
 **/
export const SecondaryButton: FC<SecondaryButtonProps> = (props) => {
  return <Button color="light" {...props} />;
};
