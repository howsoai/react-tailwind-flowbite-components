import {
  type ComponentProps,
  FC,
  forwardRef,
  type PropsWithChildren,
  ReactNode,
  useLayoutEffect,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { Skeleton } from "../../Feedback";

export interface DataTableProps
  extends PropsWithChildren,
    Omit<ComponentProps<"div">, "ref"> {
  bordered?: boolean;
  caption?: ReactNode;
  centeredIndex?: number;
  /**
   * An array of column headers.
   * Most tables will use simple single depth headers.
   *   ['x', 'y', 'z']
   * More complicated tables may require multiple rows of headers.
   * This can be accomplished using arrays for each cell.
   *   [
   *     ['Monday', 'x']
   *     ['', 'y']
   *     ['', 'z']
   *     ['Tuesday', 'x']
   *     ['', 'y']
   *     ['', 'z']
   *   ]
   */
  columns?: ReactNode[] | ReactNode[][];
  className?: string;
  loading?: boolean;
  loadingRows?: number;
  marginBottom?: boolean;
  shadowed?: boolean;
  stickyColumns?: number[];
  tableProps?: Omit<ComponentProps<"table">, "ref" | "children">;
  /** Defaults to full */
  width?: "full" | "auto";
}

export const DataTableComponent: FC<DataTableProps> = ({
  caption: captionChildren,
  centeredIndex,
  children,
  className,
  columns = [],
  loading,
  loadingRows = 1,
  marginBottom = false,
  bordered = true,
  shadowed = true,
  stickyColumns,
  tableProps,
  width = "full",
  ...props
}) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  // Scroll the centeredIndex into view if provided
  useLayoutEffect(() => {
    if (!container || !centeredIndex) {
      return;
    }

    try {
      const th = container.querySelector(
        `thead > tr > th:nth-child(${centeredIndex + 1})`,
      ) as HTMLTableCellElement;
      if (!th) {
        throw new Error(`th is undefined`);
      }

      // ?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      // scrollIntoView() would be nice to use, but this component could appear on the same twice in the same moment.
      // Chrome doesn't support simultaneous smooth scroll into view, though other browsers do.
      const centerPosition =
        th.offsetLeft -
        (container.getBoundingClientRect().width -
          th.getBoundingClientRect().width) /
          2;
      container.scrollTo({ left: centerPosition, behavior: "smooth" });
    } catch (reason) {
      console.warn(reason);
    }
  }, [container, centeredIndex]);

  return (
    <>
      <div
        ref={setContainer}
        className={twMerge(
          "relative overflow-auto",
          bordered && "rounded-t-lg",
          marginBottom && "mb-4",
          className,
        )}
        {...props}
      >
        <table
          {...tableProps}
          className={twMerge(
            "relative caption-bottom border-gray-200 text-left text-sm dark:border-gray-700",
            shadowed && "shadow-md",
            width === "full" && "w-full",
            tableProps?.className,
          )}
        >
          <THead columns={columns} stickyColumns={stickyColumns} />
          <tbody
            className={"group/body divide-y text-gray-500 dark:text-gray-200"}
          >
            {loading
              ? new Array(loadingRows).fill(0).map((_, y) => (
                  <DataTable.Row key={["loading", y].join(":")}>
                    {columns.length > 0 ? (
                      columns.map((_, x) => (
                        <DataTable.Cell key={["loading", x].join(":")}>
                          <Skeleton />
                        </DataTable.Cell>
                      ))
                    ) : (
                      <DataTable.Cell>{<Skeleton />}</DataTable.Cell>
                    )}
                  </DataTable.Row>
                ))
              : children}
          </tbody>
          {captionChildren && (
            <caption className="sticky left-4 w-fit *:justify-start">
              <DataTable.Caption>{captionChildren}</DataTable.Caption>
            </caption>
          )}
        </table>
      </div>
    </>
  );
};

DataTableComponent.displayName = "DataTable";

type THeadProps = Pick<DataTableProps, "columns" | "stickyColumns">;
const THead: FC<THeadProps> = ({ columns, stickyColumns }) => {
  if (!columns?.length) return null;

  // Reshape headers into an array array structure if they are the more simple default.
  const arrayHeaders: ReactNode[][] = columns.map((header) =>
    Array.isArray(header) ? header : [header],
  );
  const rows = arrayHeaders.at(0)?.length || 1;

  return (
    <thead className="group/head sticky top-0 text-xs uppercase text-gray-700 dark:text-gray-400">
      {new Array(rows).fill(0).map((_, y) => (
        <tr key={y}>
          {columns.map((_, x) => (
            <th
              key={x}
              className={twMerge(
                dataTableHeaderColorsClassNames,
                "whitespace-nowrap px-4 py-3",
                stickyColumns?.includes(x) &&
                  DataTable.classes.stickyClassNames,
              )}
            >
              {arrayHeaders[x][y]}
            </th>
          ))}
        </tr>
      ))}
      {/* Bottom border for sticky header */}
      <tr>
        <th
          className="h-px bg-gray-200 p-0 dark:bg-gray-700"
          colSpan={columns.length}
        />
      </tr>
    </thead>
  );
};

export type DataTableRowProps = PropsWithChildren<ComponentProps<"tr">> & {
  className?: string;
  /** Applies a selected (primary) state */
  selected?: boolean;
};

const DataTableRow = forwardRef<HTMLTableRowElement, DataTableRowProps>(
  ({ children, className, selected, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={twMerge(
          "group/row border-gray-200 dark:border-gray-700",
          selected
            ? "bg-blue-50 dark:bg-blue-950"
            : "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-800",
          className,
        )}
        {...props}
      >
        {children}
      </tr>
    );
  },
);
DataTableRow.displayName = "DataTable.Row";

export type DataTableCellProps = PropsWithChildren<ComponentProps<"td">> & {
  className?: string;
  color?: "primary" | "success" | "error" | "info";
  /** Applies a selected (primary) state */
  selected?: boolean;
  sticky?: boolean;
};

const DataTableCell = forwardRef<HTMLTableCellElement, DataTableCellProps>(
  ({ children, color, className, selected, sticky, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={twMerge(
          "whitespace-nowrap p-4",
          (selected || color === "primary") &&
            "text-primary-600 dark:text-primary-400",
          color === "success" && "text-green-600 dark:text-green-400",
          color === "error" && "text-red-600 dark:text-red-400",
          color === "info" && "text-blue-600 dark:text-blue-400",
          sticky && DataTable.classes.stickyClassNames,
          className,
        )}
        {...props}
      >
        {children}
      </td>
    );
  },
);
DataTableCell.displayName = "DataTable.Cell";

export type DataTableCaptionProps = {
  className?: string;
  children?: ReactNode;
};

export const DataTableCaption: FC<DataTableCaptionProps> = function ({
  children,
  className,
}) {
  return (
    <span
      className={twMerge(
        "mt-4 flex justify-center text-sm text-gray-500 dark:text-gray-400",
        className,
      )}
    >
      {children}
    </span>
  );
};

const dataTableHeaderColorsClassNames = "bg-gray-100 dark:bg-gray-700";

export const DataTable = Object.assign(DataTableComponent, {
  Row: DataTableRow,
  Cell: DataTableCell,
  Caption: DataTableCaption,
  classes: {
    stickyClassNames: `sticky left-0 ${dataTableHeaderColorsClassNames}`,
  },
});
