import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiOutlineLogout } from "react-icons/hi";

export const LogoutIcon: FC<IconBaseProps> = (props) => {
  return <HiOutlineLogout {...props} />;
};
