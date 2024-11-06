import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Skeleton } from "../../Feedback";
import { DateShortI18nBundle as i18n } from "./DateShort.i18n";

export type DateShortProps = {
  /** Strings must be provided in ISO format */
  value?: Date | string | null;
  loading?: boolean;
};
export const DateShort: FC<DateShortProps> = ({ loading, value }) => {
  const { t } = useTranslation(i18n.namespace);
  const date = !value
    ? undefined
    : typeof value === "string"
      ? new Date(value)
      : value;

  return loading ? (
    <Skeleton variant="text" className="w-20" />
  ) : !date ? null : (
    t(i18n.strings.date, { value: date })
  );
};
