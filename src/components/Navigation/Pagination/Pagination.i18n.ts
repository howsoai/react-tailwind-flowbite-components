import {
  getStringsForI18nBundleFromResource,
  I18nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "../../../constants";

const namespace = "Pagination";

const en = {
  //   first: "First",
  //   last: "Last",
  next: "Next",
  position:
    "Showing <strong>{{start}}</strong>-<strong>{{end}}</strong> of <strong>{{total}}</strong>",
  previous: "Previous",
};

type Resource = typeof en;

export const PaginationI18nBundle: I18nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForI18nBundleFromResource<Resource>(en),
};
