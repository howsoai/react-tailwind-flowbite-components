import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type VisibilityIconProps = IconBaseProps & {
  isVisible?: boolean;
};
export const VisibilityIcon: FC<VisibilityIconProps> = ({
  isVisible,
  ...props
}) => (isVisible ? <FaEye {...props} /> : <FaEyeSlash {...props} />);
