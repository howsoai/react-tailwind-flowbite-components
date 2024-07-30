import {
  getStringsForI18nBundleFromResource,
  I18nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "@/constants";

const namespace = "FieldErrorMessage";

const en = {
  type: {
    required: "This field is required.",
    min: "Value too small.",
    max: "Value too large.",
    minLength: "Value too short.",
    maxLength: "Value too long.",
  },
};

type Resource = typeof en;

export const FieldErrorMessageI18nBundle: I18nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForI18nBundleFromResource<Resource>(en),
};
