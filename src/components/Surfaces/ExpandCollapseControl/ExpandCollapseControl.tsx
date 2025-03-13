import { Button, ButtonProps } from "flowbite-react";
import { FC, ReactNode } from "react";
import { ExpandCollapseIcon, ExpandCollapseIconProps } from "../../Icons";

export type ExpandCollapseControlProps = ButtonProps &
  Pick<
    ExpandCollapseIconProps,
    "isExpanded" | "rotateClassName" | "expandedRotateClassName"
  > & {
    children: ReactNode;
  };
const ExpandCollapseControlComponent: FC<ExpandCollapseControlProps> = ({
  children,
  isExpanded,
  rotateClassName,
  expandedRotateClassName,
  ...props
}) => {
  return (
    <Button color={"light"} type="button" {...props}>
      <span className="mr-1">{children}</span>
      <ExpandCollapseIcon
        isExpanded={isExpanded}
        rotateClassName={rotateClassName}
        expandedRotateClassName={expandedRotateClassName}
      />
    </Button>
  );
};

type ExpandCollapseControlPropsPresetDirection = Omit<
  ExpandCollapseControlProps,
  "rotateClassName" | "expandedRotateClassName"
>;
const ExpandDown: FC<ExpandCollapseControlPropsPresetDirection> = (props) => (
  <ExpandCollapseControlComponent
    {...props}
    rotateClassName="rotate-0"
    expandedRotateClassName="rotate-180"
  />
);

const ExpandRight: FC<ExpandCollapseControlPropsPresetDirection> = (props) => (
  <ExpandCollapseControlComponent
    {...props}
    rotateClassName="-rotate-90"
    expandedRotateClassName="rotate-90"
  />
);

const ExpandUp: FC<ExpandCollapseControlPropsPresetDirection> = (props) => (
  <ExpandCollapseControlComponent
    {...props}
    rotateClassName="rotate-180"
    expandedRotateClassName="rotate-0"
  />
);

const ExpandLeft: FC<ExpandCollapseControlPropsPresetDirection> = (props) => (
  <ExpandCollapseControlComponent
    {...props}
    rotateClassName="rotate-90"
    expandedRotateClassName="-rotate-90"
  />
);

export const ExpandCollapseControl = Object.assign(
  ExpandCollapseControlComponent,
  {
    ExpandDown,
    ExpandUp,
    ExpandRight,
    ExpandLeft,
  },
);
