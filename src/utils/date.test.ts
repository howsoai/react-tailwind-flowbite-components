import { DateUnitDifferences, getDateUnitDifferences } from "./date";

describe("utils/date", () => {
  describe("getDateUnitDifferences", () => {
    /** Provides some give based on daylight savings time */
    const expectHours = (
      hour: DateUnitDifferences["hour"],
      expectation: number,
    ) => {
      expect(hour).toBeGreaterThanOrEqual(expectation - 1);
      expect(hour).toBeLessThanOrEqual(expectation + 1);
    };

    it("should return a structure of descending time units between two dates", () => {
      const now = new Date();

      // Generate some time spans
      const milliseconds = 234;
      const t1 = new Date(now.getTime());
      t1.setMilliseconds(t1.getMilliseconds() - milliseconds);

      const d1 = getDateUnitDifferences(now, t1);
      expect(d1.year).toBe(0);
      expect(d1.month).toBe(0);
      expect(d1.day).toBe(0);
      expect(d1.hour).toBe(0);
      expect(d1.minute).toBe(0);
      expect(d1.second).toBe(0);
      expect(d1.millisecond).toBe(milliseconds);

      const seconds = 20;
      const t2 = new Date(t1.getTime());
      t2.setSeconds(t2.getSeconds() - seconds);

      const d2 = getDateUnitDifferences(now, t2);
      expect(d2.year).toBe(0);
      expect(d2.month).toBe(0);
      expect(d2.day).toBe(0);
      expect(d2.hour).toBe(0);
      expect(d2.minute).toBe(0);
      expect(d2.second).toBe(seconds);
      expect(d2.millisecond).toBe(milliseconds);

      const minutes = 54;
      const t3 = new Date(t2.getTime());
      t3.setMinutes(t3.getMinutes() - minutes);

      const d3 = getDateUnitDifferences(now, t3);
      expect(d3.year).toBe(0);
      expect(d3.month).toBe(0);
      expect(d3.day).toBe(0);
      expect(d3.hour).toBe(0);
      expect(d3.minute).toBe(minutes);
      expect(d3.second).toBe(seconds);
      expect(d3.millisecond).toBe(milliseconds);

      const hours = 3;
      const t4 = new Date(t3.getTime());
      t4.setHours(t4.getHours() - hours);

      const d4 = getDateUnitDifferences(now, t4);
      expect(d4.year).toBe(0);
      expect(d4.month).toBe(0);
      expect(d4.day).toBe(0);
      expect(d4.hour).toBe(hours);
      expect(d4.minute).toBe(minutes);
      expect(d4.second).toBe(seconds);
      expect(d4.millisecond).toBe(milliseconds);

      const days = 20;
      const t5 = new Date(t4.getTime());
      t5.setDate(t5.getDate() - days);

      const d5 = getDateUnitDifferences(now, t5);
      expect(d5.year).toBe(0);
      expect(d5.month).toBe(0);
      expect(d5.day).toBe(days);
      expectHours(d5.hour, hours);
      expect(d5.minute).toBe(minutes);
      expect(d5.second).toBe(seconds);
      expect(d5.millisecond).toBe(milliseconds);

      const months = 4;
      const t6 = new Date(t5.getTime());
      t6.setMonth(t6.getMonth() - months);

      const d6 = getDateUnitDifferences(now, t6);
      expect(d6.year).toBe(0);
      expect(d6.month).toBe(months);
      expect(d6.day).toBeGreaterThan(0); // Don't expect days to be equal, some with less, some with more in a year.
      expectHours(d6.hour, hours);
      expect(d6.minute).toBe(minutes);
      expect(d6.second).toBe(seconds);
      expect(d6.millisecond).toBe(milliseconds);

      const years = 12;
      const t7 = new Date(t6.getTime());
      t7.setFullYear(t7.getFullYear() - years);

      const d7 = getDateUnitDifferences(now, t7);
      expect(d7.year).toBe(years);
      expect(d7.month).toBeGreaterThan(0); // Don't months to be equal, it's based on a rolling 30, not perfect time range
      expect(d7.day).toBeGreaterThan(0); // Don't expect days to be equal, some with less, some with more in a year.
      expectHours(d7.hour, hours);
      expect(d7.minute).toBe(minutes);
      expect(d7.second).toBe(seconds);
      expect(d7.millisecond).toBe(milliseconds);
    });
  });
});
