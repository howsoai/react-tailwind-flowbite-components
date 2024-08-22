import { FC } from "react";
import { IconBaseProps } from "react-icons";
import { HiArrowCircleRight } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export type ArrowCircleIconProps = IconBaseProps & {
  direction: "up" | "right" | "down" | "left";
};
/** A single arrow component with animation between any given rotations */
export const ArrowCircleIcon: FC<ArrowCircleIconProps> = ({
  direction,
  ...props
}) => {
  return (
    <HiArrowCircleRight
      {...props}
      className={twMerge(
        "transition-transform",
        direction === "up" && "-rotate-90",
        direction === "down" && "rotate-90",
        direction === "left" && "rotate-180",
      )}
    />
  );
};
