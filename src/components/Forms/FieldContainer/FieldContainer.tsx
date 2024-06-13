import { FC } from "react";

export type FieldContainerProps = React.HTMLAttributes<HTMLDivElement>;
export const FieldContainer: FC<FieldContainerProps> = (props) => (
  <div {...props} className={props.className} />
);
