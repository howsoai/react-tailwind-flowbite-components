import {
  getStringsForIl8nBundleFromResource,
  Il8nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "@/constants";

const namespace = "Skeleton";

const en = {
  loading: "Loading...",
};

type Resource = typeof en;

export const SkeletonIl8nBundle: Il8nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForIl8nBundleFromResource<Resource>(en),
};
