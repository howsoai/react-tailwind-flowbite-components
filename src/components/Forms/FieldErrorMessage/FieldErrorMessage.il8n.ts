import {
  getStringsForIl8nBundleFromResource,
  Il8nBundle,
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

export const FieldErrorMessageIl8nBundle: Il8nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForIl8nBundleFromResource<Resource>(en),
};
