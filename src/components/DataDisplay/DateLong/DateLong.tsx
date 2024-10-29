import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Skeleton } from "../../Feedback";
import { DateLongI18nBundle as i18n } from "./DateLong.i18n";

export type DateLongProps = {
  /** Strings must be provided in ISO format */
  value?: Date | string | null;
  loading?: boolean;
};
export const DateLong: FC<DateLongProps> = ({ loading, value }) => {
  const { t } = useTranslation(i18n.namespace);
  const date = !value
    ? undefined
    : typeof value === "string"
      ? new Date(value)
      : value;

  return loading ? (
    <Skeleton variant="text" className="w-32" />
  ) : (
    t(i18n.strings.date, { value: date })
  );
};
