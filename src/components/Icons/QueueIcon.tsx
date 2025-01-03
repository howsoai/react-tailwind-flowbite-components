import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiMiniQueueList } from "react-icons/hi2";

export const QueueIcon: FC<IconBaseProps> = (props) => {
  return <HiMiniQueueList {...props} />;
};
