import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { HiDocumentDuplicate } from "react-icons/hi";

export type FilesIconProps = IconBaseProps & {};
export const FilesIcon: FC<FilesIconProps> = (props) => {
  return <HiDocumentDuplicate {...props} />;
};
