import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiDownload, HiPencil } from "react-icons/hi";

export const EditIcon: FC<IconBaseProps> = (props) => {
  return <HiPencil {...props} />;
};
