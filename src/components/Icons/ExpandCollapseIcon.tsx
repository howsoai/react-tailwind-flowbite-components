import { FC } from "react";
import { IconBaseProps } from "react-icons";
import { HiChevronDown } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export type ExpandCollapseIconProps = IconBaseProps & {
  isExpanded: boolean;
};
export const ExpandCollapseIcon: FC<ExpandCollapseIconProps> = ({
  isExpanded,
  ...props
}) => {
  return (
    <HiChevronDown
      {...props}
      className={twMerge(
        "transition-transform duration-200 ease-in-out",
        isExpanded && "rotate-180",
        props.className
      )}
    />
  );
};
