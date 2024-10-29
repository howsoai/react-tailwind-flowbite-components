import {
  getStringsForI18nBundleFromResource,
  I18nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "../../../constants";

const namespace = "DateTimeShort";

const en = {
  dateTime:
    "{{value, datetime(year: numeric; month: 2-digit; day: 2-digit; hour: 2-digit; minute: 2-digit)}}",
};

type Resource = typeof en;

export const DateTimeShortI18nBundle: I18nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForI18nBundleFromResource<Resource>(en),
};
