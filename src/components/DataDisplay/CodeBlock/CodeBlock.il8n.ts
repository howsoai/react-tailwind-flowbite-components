import {
  getStringsForIl8nBundleFromResource,
  Il8nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "@/constants";

const namespace = "CodeBlock";

const en = {
  copied: "Copied",
  copy: "Copy",
  download: "Download",
};

type Resource = typeof en;

export const CodeBlockIl8nBundle: Il8nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForIl8nBundleFromResource<Resource>(en),
};
