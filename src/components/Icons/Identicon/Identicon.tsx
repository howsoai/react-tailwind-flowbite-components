import { Tooltip } from "flowbite-react";
import { type ComponentProps, type FC, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { Skeleton } from "../../Feedback/Skeleton";
import { minidenticon } from "./lib";

export type IdenticonProps = ComponentProps<"span"> & {
  /** If not provided the default Identicon will be used */
  id?: string;
  loading?: boolean;
  /** Default: true */
  tooltip?: boolean;
};
export const Identicon: FC<IdenticonProps> = ({
  className,
  id,
  loading,
  tooltip = true,
  ...props
}) => {
  return (
    <span
      {...props}
      className={twMerge("inline-block aspect-square h-6 min-h-6", className)}
    >
      {loading ? (
        <Skeleton className={classes} />
      ) : id ? (
        tooltip ? (
          <Tooltip content={<span className="truncate">{id}</span>}>
            <Img id={id} />
          </Tooltip>
        ) : (
          <Img id={id} />
        )
      ) : (
        <Default />
      )}
    </span>
  );
};

const Default: FC = () => <Img id="Howso" />;

type ImgProps = ComponentProps<"img"> & {
  id: string;
};
const Img: FC<ImgProps> = ({ id, ...props }) => {
  const svgURI = useMemo(
    () => "data:image/svg+xml;utf8," + encodeURIComponent(minidenticon(id)),
    [id],
  );
  return <img src={svgURI} alt={id} {...props} className={classes} />;
};

const classes = "h-full w-full border border-gray-200 dark:border-gray-800";
