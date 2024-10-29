import {
  getStringsForI18nBundleFromResource,
  I18nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "../../../constants";

const namespace = "NoResultsAlert";

const en = {
  "no{{nouns}}Found": "No {{nouns}} found",
  results: "results",
};

type Resource = typeof en;

export const NoResultsAlertI18nBundle: I18nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForI18nBundleFromResource<Resource>(en),
};
