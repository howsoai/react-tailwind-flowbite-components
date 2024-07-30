import {
  getStringsForI18nBundleFromResource,
  I18nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "@/constants";

const namespace = "CodeBlock";

const en = {
  copied: "Copied",
  copy: "Copy",
  download: "Download",
};

type Resource = typeof en;

export const CodeBlockI18nBundle: I18nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForI18nBundleFromResource<Resource>(en),
};
