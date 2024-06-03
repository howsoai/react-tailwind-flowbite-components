import { FC, ReactNode } from "react";
import { Button, ButtonProps } from "flowbite-react";
import { ExpandCollapseIcon } from "@/components";

export type ExpandCollapseControlProps = ButtonProps & {
  isExpanded: boolean;
  children: ReactNode;
};
export const ExpandCollapseControl: FC<ExpandCollapseControlProps> = ({
  children,
  isExpanded,
  ...props
}) => {
  return (
    <Button color={"light"} type="button" {...props}>
      <span className="mr-1">{children}</span>{" "}
      <ExpandCollapseIcon isExpanded={isExpanded} />
    </Button>
  );
};
