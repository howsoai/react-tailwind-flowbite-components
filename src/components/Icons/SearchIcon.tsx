import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiSearch } from "react-icons/hi";

export const SearchIcon: FC<IconBaseProps> = function (props) {
  return <HiSearch {...props} />;
};
