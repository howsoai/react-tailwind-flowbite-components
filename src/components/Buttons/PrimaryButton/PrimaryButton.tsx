import { Button, ButtonProps, Flowbite } from "flowbite-react";
import { FC } from "react";
import { standardFlowbiteTheme } from "../../../themes";

export type PrimaryButtonProps = ButtonProps;
/**
 * A convience wrapper setting defaults for Primary buttons and tracking all usages.
 * By default: Blue, filled
 **/
export const PrimaryButton: FC<PrimaryButtonProps> = function ({ ...props }) {
  return (
    <Flowbite theme={{ theme: standardFlowbiteTheme }}>
      <Button color="primary" {...props} />
    </Flowbite>
  );
};
