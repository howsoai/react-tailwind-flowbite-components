import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiChevronRight } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export type ChevronIconProps = IconBaseProps & {
  direction: "up" | "right" | "down" | "left";
};
/** A single arrow component with animation between any given rotations */
export const ChevronIcon: FC<ChevronIconProps> = ({ direction, ...props }) => {
  return (
    <HiChevronRight
      {...props}
      className={twMerge(
        "transition-transform",
        direction === "up" && "-rotate-90",
        direction === "down" && "rotate-90",
        direction === "left" && "rotate-180",
        props.className,
      )}
    />
  );
};
