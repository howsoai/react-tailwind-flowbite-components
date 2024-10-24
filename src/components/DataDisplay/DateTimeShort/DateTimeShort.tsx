import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Skeleton } from "../../Feedback";
import { DateTimeShortI18nBundle as i18n } from "./DateTimeShort.i18n";

export type DateTimeShortProps = {
  /** Strings must be provided in ISO format */
  value?: Date | string;
  loading?: boolean;
};
export const DateTimeShort: FC<DateTimeShortProps> = ({ loading, value }) => {
  const { t } = useTranslation(i18n.namespace);
  const date = !value
    ? undefined
    : typeof value === "string"
      ? new Date(value)
      : value;

  return loading ? (
    <Skeleton variant="text" className="w-48" />
  ) : (
    t(i18n.strings.dateTime, { value: date })
  );
};
