import { FC } from "react";
import { Button, type ButtonProps } from "../Button";

export type SecondaryButtonProps = ButtonProps;
/**
 * A convince wrapper setting defaults for Secondary buttons and tracking all usages.
 * By default: "secondary", outline
 **/
export const SecondaryButton: FC<SecondaryButtonProps> = (props) => {
  return <Button color="secondary" outline {...props} />;
};
