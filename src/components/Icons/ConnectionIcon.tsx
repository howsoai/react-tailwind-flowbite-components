import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiOutlineStatusOffline, HiOutlineStatusOnline } from "react-icons/hi";

type IconBaseConnectionIconProps = IconBaseProps & {
  status: "online" | "offline";
};
export const ConnectionIcon: FC<IconBaseConnectionIconProps> = ({
  status,
  ...props
}) =>
  status === "online" ? (
    <HiOutlineStatusOnline {...props} />
  ) : (
    <HiOutlineStatusOffline {...props} />
  );
