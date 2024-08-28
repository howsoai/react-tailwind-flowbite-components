import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiCheckCircle, HiDocumentDuplicate } from "react-icons/hi";

export type CopyIconProps = IconBaseProps & {
  /** Updates the icon to a copied state */
  copied?: boolean;
};
export const CopyIcon: FC<CopyIconProps> = ({ copied, ...props }) => {
  return copied ? (
    <HiCheckCircle {...props} />
  ) : (
    <HiDocumentDuplicate {...props} />
  );
};
