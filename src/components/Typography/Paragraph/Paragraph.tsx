import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { UX } from "../../../constants";

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
      className={twMerge(
        marginBottom && UX.classes.marginBottom,
        props.className,
      )}
    />
  );
};
