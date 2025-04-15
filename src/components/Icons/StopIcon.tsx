import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { FaStop, FaStopCircle } from "react-icons/fa";

export type StopIconProps = IconBaseProps & {
  /**
   * Activates the alternative format of a square, without containing circle.
   * Typically used in <IconButton />
   **/
  square?: boolean;
};
export const StopIcon: FC<StopIconProps> = ({ square, ...props }) =>
  square ? <FaStop {...props} /> : <FaStopCircle {...props} />;
