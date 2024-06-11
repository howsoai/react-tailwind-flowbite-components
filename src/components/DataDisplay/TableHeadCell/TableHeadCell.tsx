import { FC } from "react";
import { twMerge } from "tailwind-merge";
import {
  TableHeadCellProps as FlowbiteTableHeadCellProps,
  getTheme,
} from "flowbite-react";

export type TableHeadCellProps = FlowbiteTableHeadCellProps & {
  as?: "td" | "th";
};
/** A specialized override of Flowbite's TableHead.Cell functionality allowing the `as` prop for accessibility */
export const TableHeadCell: FC<TableHeadCellProps> = ({
  as = "th",
  ...props
}) => {
  const tableTheme = getTheme().table;

  const Element = as;
  return (
    <Element
      {...props}
      className={twMerge(tableTheme.head.cell.base, props.className)}
    />
  );
};
