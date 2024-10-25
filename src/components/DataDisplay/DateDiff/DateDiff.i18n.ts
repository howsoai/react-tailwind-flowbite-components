import {
  getStringsForI18nBundleFromResource,
  I18nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "../../../constants";

const namespace = "DateDiff";

const en = {
  short: {
    "{{value}}_{{unit}}": '$t(short.{{unit}}, {"count": {{value}} })',
    millisecond: "{{count}}ms",
    millisecond_other: "{{count}}ms",
    second: "{{count}}s",
    second_other: "{{count}}s",
    minute: "{{count}}min",
    minute_other: "{{count}}min",
    hour: "{{count}}h",
    hour_other: "{{count}}h",
    day: "{{count}}d",
    day_other: "{{count}}d",
    month: "{{count}}mo",
    month_other: "{{count}}mo",
    year: "{{count}}y",
    year_other: "{{count}}y",
  },
  long: {
    "{{value}}_{{unit}}": '$t(long.{{unit}}, {"count": {{value}} })',
    millisecond: "{{count}} millisecond",
    millisecond_other: "{{count}} milliseconds",
    second: "{{count}} second",
    second_other: "{{count}} seconds",
    minute: "{{count}} minute",
    minute_other: "{{count}} minutes",
    hour: "{{count}} hour",
    hour_other: "{{count}} hours",
    day: "{{count}} day",
    day_other: "{{count}} days",
    month: "{{count}} month",
    month_other: "{{count}} months",
    year: "{{count}} year",
    year_other: "{{count}} years",
  },
  orderError: "Order error: {{end}} before {{start}}",
  invalidError: "Invalid error: end ({{end}}), start ({{start}})",
};

type Resource = typeof en;

export const DateDiffI18nBundle: I18nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForI18nBundleFromResource<Resource>(en),
};
