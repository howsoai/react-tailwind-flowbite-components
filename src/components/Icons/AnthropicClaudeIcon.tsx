import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { SiClaude } from "react-icons/si";

export const AnthropicClaudeIcon: FC<IconBaseProps> = ({
  direction,
  ...props
}) => <SiClaude {...props} />;
