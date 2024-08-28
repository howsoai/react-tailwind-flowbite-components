import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { FaGithub } from "react-icons/fa6";

export type GitHubIconProps = IconBaseProps & {};
export const GitHubIcon: FC<GitHubIconProps> = (props) => {
  return <FaGithub {...props} />;
};
