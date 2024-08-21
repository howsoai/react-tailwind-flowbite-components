import { Button } from "flowbite-react";
import { FC } from "react";
import { type ButtonBaseProps } from "../ButtonBase";

export type SecondaryButtonProps = ButtonBaseProps;
/**
 * A convince wrapper setting defaults for Secondary buttons and tracking all usages.
 * By default: "secondary", outline
 **/
export const SecondaryButton: FC<SecondaryButtonProps> = (props) => {
  return <Button color="secondary" outline {...props} />;
};
