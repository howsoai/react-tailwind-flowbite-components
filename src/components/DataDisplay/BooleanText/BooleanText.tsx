import { FC } from "react";
import { BooleanTextIl8nBundle } from "./BooleanText.il8n";
import { useTranslation } from "react-i18next";

export interface BooleanTextProps {
  value?: boolean;
}
export const BooleanText: FC<BooleanTextProps> = ({ value }) => {
  const { t } = useTranslation(BooleanTextIl8nBundle.namespace);
  if (value) return t(BooleanTextIl8nBundle.strings.yes);
  return t(BooleanTextIl8nBundle.strings.no);
};
