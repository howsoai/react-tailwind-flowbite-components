import { Button, ButtonProps } from "flowbite-react";
import { FC } from "react";

export type SecondaryButtonProps = ButtonProps;
/**
 * A convince wrapper setting defaults for Secondary buttons and tracking all usages.
 * By default: "light", outline
 **/
export const SecondaryButton: FC<SecondaryButtonProps> = (props) => {
  return <Button color="light" outline {...props} />;
};
