import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { UX } from "../../../constants";

export type HeadingProps = ComponentProps<"h1"> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  marginBottom?: boolean;
};
/** A generic Heading element. Convenience <H1 /> - <H6 /> components may be used as well. */
export const Heading: FC<HeadingProps> = ({
  level,
  marginBottom,
  ...props
}) => {
  const Component = `h${level}` as "h1";

  return (
    <Component
      {...props}
      className={twMerge(
        marginBottom && UX.classes.marginBottom,
        props.className,
      )}
    />
  );
};

type HeadingPropsWithoutLevel = Omit<HeadingProps, "level">;

export const H1: FC<HeadingPropsWithoutLevel> = (props) => (
  <Heading {...props} level={1} />
);

export const H2: FC<HeadingPropsWithoutLevel> = (props) => (
  <Heading {...props} level={2} />
);

export const H3: FC<HeadingPropsWithoutLevel> = (props) => (
  <Heading {...props} level={3} />
);

export const H4: FC<HeadingPropsWithoutLevel> = (props) => (
  <Heading {...props} level={4} />
);

export const H5: FC<HeadingPropsWithoutLevel> = (props) => (
  <Heading {...props} level={5} />
);

export const H6: FC<HeadingPropsWithoutLevel> = (props) => (
  <Heading {...props} level={6} />
);
