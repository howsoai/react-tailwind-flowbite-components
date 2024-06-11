import { useDefaultTranslation } from "@/hooks";
import { FC } from "react";

export interface BooleanTextProps {
  value?: boolean;
}
export const BooleanText: FC<BooleanTextProps> = ({ value }) => {
  const { t } = useDefaultTranslation();
  if (value) return t("DataDisplay.BooleanText.yes");
  return t("DataDisplay.BooleanText.no");
};
