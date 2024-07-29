import {
  getStringsForIl8nBundleFromResource,
  Il8nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "@/constants";

const namespace = "BooleanText";

const en = {
  yes: "Yes",
  no: "No",
};

type Resource = typeof en;

export const BooleanTextIl8nBundle: Il8nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForIl8nBundleFromResource<Resource>(en),
};
