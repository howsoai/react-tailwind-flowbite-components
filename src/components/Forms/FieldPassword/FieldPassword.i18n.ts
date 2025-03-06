import {
  getStringsForI18nBundleFromResource,
  I18nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "../../../constants";

const namespace = "FieldPassword";

const en = {
  visibility: {
    show: "Show",
    hide: "Hide",
  },
};

type Resource = typeof en;

export const FieldPasswordI18nBundle: I18nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForI18nBundleFromResource<Resource>(en),
};
