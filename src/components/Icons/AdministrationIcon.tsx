import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiCog } from "react-icons/hi";

export const AdministrationIcon: FC<IconBaseProps> = ({
  direction,
  ...props
}) => <HiCog {...props} />;
