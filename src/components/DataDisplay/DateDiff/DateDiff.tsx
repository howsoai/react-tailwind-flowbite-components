import { FC } from "react";
import { useTranslation } from "react-i18next";
import { getDateUnitDifferences } from "../../../utils";
import { Skeleton } from "../../Feedback";
import { DateDiffI18nBundle as i18n } from "./DateDiff.i18n";

export type DateDiffProps = {
  /**
   * If a string is provided, it must be in ISO format.
   * If no value is supplied, nothing will be rendered.
   * If it is before start, an error message will be returned.
   */
  end: Date | string | null | undefined;
  /**
   * If a string is provided, it must be in ISO format.
   * If no value is supplied, nothing will be rendered.
   * If it is after end, an error message will be returned.
   */
  start: Date | string | null | undefined;
  /**
   * The number of units to display, from most significant to least.
   * Default: 2
   **/
  significantUnits?: number;
  loading?: boolean;
};
export const DateDiff: FC<DateDiffProps> = ({
  end,
  start,
  significantUnits = 2,
  loading,
}) => {
  const { t } = useTranslation(i18n.namespace);

  if (loading) {
    return <Skeleton variant="text" className="w-40" />;
  }

  if (!start || !end) {
    return null;
  }

  const endDate = typeof end === "string" ? new Date(end) : end;
  const startDate = typeof start === "string" ? new Date(start) : start;

  const isEndInvalid = isNaN(endDate.getTime());
  const isStartInvalid = isNaN(startDate.getTime());

  if (isStartInvalid || isEndInvalid) {
    return t(i18n.strings.invalidError, {
      end: JSON.stringify(endDate),
      start: JSON.stringify(startDate),
    });
  }

  if (startDate < endDate) {
    return t(i18n.strings.orderError, {
      end: endDate.toISOString(),
      start: startDate.toISOString(),
    });
  }

  const difference = getDateUnitDifferences(startDate, endDate);
  const significantValues = Object.entries(difference)
    .filter(([_, value]) => !!value)
    .slice(0, significantUnits);
  const translations = significantValues.map(([unit, value]) =>
    t(i18n.strings["{{value}}_{{unit}}"], { unit, value }),
  );

  return translations.join(", ");
};
