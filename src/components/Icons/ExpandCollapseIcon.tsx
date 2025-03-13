import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiChevronDown } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export type ExpandCollapseIconProps = IconBaseProps & {
  isExpanded: boolean;
  /** Default: "rotate-0" (Down) */
  rotateClassName?: string;
  /** Default: "rotate-180" (Up) */
  expandedRotateClassName?: string;
};
const ExpandCollapseIconComponent: FC<ExpandCollapseIconProps> = ({
  isExpanded,
  rotateClassName = "rotate-0",
  expandedRotateClassName = "rotate-180",
  ...props
}) => {
  return (
    <HiChevronDown
      {...props}
      className={twMerge(
        "transition-transform duration-200 ease-in-out",
        rotateClassName,
        isExpanded && expandedRotateClassName,
        props.className,
      )}
    />
  );
};

type ExpandCollapseIconPropsPresetDirection = Omit<
  ExpandCollapseIconProps,
  "rotateClassName" | "expandedRotateClassName"
>;
const ExpandDown: FC<ExpandCollapseIconPropsPresetDirection> = (props) => (
  <ExpandCollapseIconComponent
    {...props}
    rotateClassName="rotate-0"
    expandedRotateClassName="rotate-180"
  />
);

const ExpandRight: FC<ExpandCollapseIconPropsPresetDirection> = (props) => (
  <ExpandCollapseIconComponent
    {...props}
    rotateClassName="-rotate-90"
    expandedRotateClassName="rotate-90"
  />
);

const ExpandUp: FC<ExpandCollapseIconPropsPresetDirection> = (props) => (
  <ExpandCollapseIconComponent
    {...props}
    rotateClassName="rotate-180"
    expandedRotateClassName="rotate-0"
  />
);

const ExpandLeft: FC<ExpandCollapseIconPropsPresetDirection> = (props) => (
  <ExpandCollapseIconComponent
    {...props}
    rotateClassName="rotate-90"
    expandedRotateClassName="-rotate-90"
  />
);

export const ExpandCollapseIcon = Object.assign(ExpandCollapseIconComponent, {
  ExpandDown,
  ExpandUp,
  ExpandRight,
  ExpandLeft,
});
