import { FC } from "react";
import { BooleanTextI18nBundle } from "./BooleanText.i18n";
import { useTranslation } from "react-i18next";

export interface BooleanTextProps {
  value?: boolean;
}
export const BooleanText: FC<BooleanTextProps> = ({ value }) => {
  const { t } = useTranslation(BooleanTextI18nBundle.namespace);
  if (value) return t(BooleanTextI18nBundle.strings.yes);
  return t(BooleanTextI18nBundle.strings.no);
};
