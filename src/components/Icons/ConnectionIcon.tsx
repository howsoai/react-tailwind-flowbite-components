import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiOutlineStatusOffline, HiOutlineStatusOnline } from "react-icons/hi";

type ConnectionIconProps = IconBaseProps & {
  status: "online" | "offline";
};
export const ConnectionIcon: FC<ConnectionIconProps> = ({
  status,
  ...props
}) =>
  status === "online" ? (
    <HiOutlineStatusOnline {...props} />
  ) : (
    <HiOutlineStatusOffline {...props} />
  );
