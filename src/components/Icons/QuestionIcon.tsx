import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { FaQuestionCircle } from "react-icons/fa";

export const QuestionIcon: FC<IconBaseProps> = (props) => {
  return <FaQuestionCircle {...props} />;
};
