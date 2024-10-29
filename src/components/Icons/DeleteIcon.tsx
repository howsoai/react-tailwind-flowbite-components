import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiTrash } from "react-icons/hi";

export const DeleteIcon: FC<IconBaseProps> = (props) => {
  return <HiTrash {...props} />;
};
