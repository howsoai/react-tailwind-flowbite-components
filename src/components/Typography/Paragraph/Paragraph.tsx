import { FC } from "react";
import { twMerge } from "tailwind-merge";

export type ParagraphProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  marginBottom?: boolean;
};
export const Paragraph: FC<ParagraphProps> = function ({
  marginBottom,
  ...props
}) {
  return (
    <p
      {...props}
      className={twMerge(marginBottom ? "mb-5" : undefined, props.className)}
    />
  );
};
