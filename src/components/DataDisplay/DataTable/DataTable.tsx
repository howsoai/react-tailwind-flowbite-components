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
  /** Children to send to DataTableCaption */
  caption?: ReactNode;
  /** Props to send to DataTableCaption. Ensure this object is memoized. */
  captionProps?: Omit<DataTableCaptionProps, "children">;
  /** The <th /> index from 0 to scroll to within <thead />'s first row */
  centeredColumnIndex?: number;
  /** @deprecated See centeredColumnIndex */
  centeredIndex?: number;
  /** The <tr /> index from 0 to scroll to within <tbody /> */
  centeredRowIndex?: number;
  /** Optional method for controlling scroll behavior. Default: "smooth" */
  centeringBehavior?: ScrollBehavior;
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
  captionProps,
  centeredColumnIndex,
  centeredIndex: deprecatedCenteredColumnIndex,
  centeredRowIndex,
  centeringBehavior = "smooth",
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
  const _centeredColumnIndex =
    centeredColumnIndex || deprecatedCenteredColumnIndex;

  // Scroll the centeredIndex into view if provided
  useLayoutEffect(() => {
    if (loading || !container || (!_centeredColumnIndex && !centeredRowIndex)) {
      return;
    }

    try {
      const options: ScrollToOptions = {
        behavior: centeringBehavior,
      };

      // ?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      // scrollIntoView() would be nice to use, but this component could appear on the same DOM twice in the same moment.
      // Chrome doesn't support simultaneous smooth scroll into view, though other browsers do.

      // Determine left position by column index
      if (_centeredColumnIndex) {
        const th = container.querySelector(
          `thead > tr:first-child > th:nth-child(${_centeredColumnIndex + 1})`,
        ) as HTMLTableCellElement;
        if (!th) throw new Error(`th is undefined`);

        options.left =
          th.offsetLeft -
          (container.getBoundingClientRect().width -
            th.getBoundingClientRect().width) /
            2;
      }

      // Determine top position by row index
      if (centeredRowIndex) {
        const tr = container.querySelector(
          `tbody > tr:nth-child(${centeredRowIndex + 1})`,
        ) as HTMLTableCellElement;
        if (!tr) throw new Error(`th is undefined`);

        options.top =
          (container.getBoundingClientRect().height -
            tr.getBoundingClientRect().height) /
          2;
      }

      container.scrollTo(options);
    } catch (reason) {
      console.warn(reason);
    }
  }, [
    container,
    _centeredColumnIndex,
    centeredRowIndex,
    centeringBehavior,
    loading,
  ]);

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
            className={"group/body divide-y text-gray-800 dark:text-gray-200"}
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
            <caption
              {...captionProps}
              className={twMerge(
                "sticky left-4 w-fit *:justify-start",
                captionProps?.className,
              )}
            >
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
            "font-bold text-primary-600 dark:text-primary-400",
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

export type DataTableCaptionProps = ComponentProps<"span">;
/** An inline component styled to look like a <caption />. Through DataTable it is embedded inside <caption /> */
export const DataTableCaption: FC<DataTableCaptionProps> = (props) => (
  <span
    {...props}
    className={twMerge(
      "mt-2 flex justify-center text-sm text-gray-600 dark:text-gray-400",
      props.className,
    )}
  />
);

const dataTableHeaderColorsClassNames = "bg-gray-100 dark:bg-gray-700";

export const DataTable = Object.assign(DataTableComponent, {
  Row: DataTableRow,
  Cell: DataTableCell,
  Caption: DataTableCaption,
  classes: {
    stickyClassNames: `sticky left-0 ${dataTableHeaderColorsClassNames}`,
  },
});
