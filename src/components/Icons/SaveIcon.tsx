import type { FC } from "react";
import { IconBaseProps } from "react-icons";
import { HiSave } from "react-icons/hi";

export const SaveIcon: FC<IconBaseProps> = function (props) {
  return <HiSave {...props} />;
};
