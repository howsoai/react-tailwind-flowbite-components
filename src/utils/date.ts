export const getRelativeTime = (time?: Date | string | null) => {
  if (!time) {
    return "";
  }

  if (typeof time === "string") {
    time = new Date(time);
  }

  const difference = Date.now() - time.getTime();
  if (difference >= 24 * 60 * 60 * 1000) {
    return time.toLocaleString();
  } else if (difference >= 1000 * 60 * 60) {
    return `${Math.floor(difference / (1000 * 60 * 60))} hours ago`;
  } else if (difference >= 1000 * 60) {
    return `${Math.floor(difference / (1000 * 60))} minutes ago`;
  } else {
    return "Just now";
  }
};

/** An array of DateUnitDifference in descending order */
type DateUnitDifferences = Record<DateUnitDifferenceUnit, number>;
type DateUnitDifferenceUnit =
  | "year"
  | "month"
  | "day"
  | "hour"
  | "minute"
  | "second"
  | "millisecond";

/**
 * Returns unit breakdowns between times.
 * Note the calculations are not absolutely correct due to varying year, month, variances etc.
 */
export const getDateUnitDifferences = (
  start: Date,
  end: Date,
): DateUnitDifferences => {
  let diffInMs = Math.abs(end.getTime() - start.getTime());

  const units: { unit: DateUnitDifferenceUnit; ms: number }[] = [
    { unit: "year", ms: 31_536_000_000 }, // 365 days
    { unit: "month", ms: 2_592_000_000 }, // 30 days
    { unit: "day", ms: 86_400_000 },
    { unit: "hour", ms: 3_600_000 },
    { unit: "minute", ms: 60_000 },
    { unit: "second", ms: 1_000 },
    { unit: "millisecond", ms: 1 },
  ];

  return units.reduce(
    (differences, { unit, ms }): DateUnitDifferences => {
      const value = Math.floor(diffInMs / ms);
      if (value > 0) {
        diffInMs -= value * ms;
      }

      differences[unit] = value;
      return differences;
    },
    {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    } satisfies DateUnitDifferences,
  );
};
