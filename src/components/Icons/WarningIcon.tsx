import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiExclamation } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export const WarningIcon: FC<IconBaseProps> = (props) => {
  return (
    <HiExclamation
      {...props}
      className={twMerge(props.className, "relative top-[1px]")}
    />
  );
};
