import { FC } from "react";
import { IconBaseProps } from "react-icons";
import { HiDocument } from "react-icons/hi";

export type FileIconProps = IconBaseProps & {};
export const FileIcon: FC<FileIconProps> = (props) => {
  return <HiDocument {...props} />;
};
