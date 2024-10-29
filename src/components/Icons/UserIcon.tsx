import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiUser } from "react-icons/hi";

export const UserIcon: FC<IconBaseProps> = (props) => {
  return <HiUser {...props} />;
};
