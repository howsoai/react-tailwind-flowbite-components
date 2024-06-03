import { FC } from "react";
import { IconBaseProps } from "react-icons";
import { HiDocumentDuplicate } from "react-icons/hi";

export const CopyIcon: FC<IconBaseProps> = (props) => {
  return <HiDocumentDuplicate {...props} />;
};
