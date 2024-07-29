import {
  getStringsForIl8nBundleFromResource,
  Il8nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "@/constants";

const namespace = "ErrorAlert";

const en = {
  generic: "Something went wrong",
};

type Resource = typeof en;

export const ErrorAlertIl8nBundle: Il8nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForIl8nBundleFromResource<Resource>(en),
};
