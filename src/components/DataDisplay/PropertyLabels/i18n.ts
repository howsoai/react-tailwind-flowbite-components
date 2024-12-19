import {
  getStringsForI18nBundleFromResource,
  I18nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "../../../constants";

const namespace = "PropertyLabels";

const en = {
  createdAt: "Created at",
  createdBy: "Created by",
  duration: "Duration",
  feature: "Feature",
  features: "Features",
  updatedAt: "Updated at",
  updatedBy: "Updated by",
  startedAt: "Started at",
  startedBy: "Started by",
  endedAt: "Ended at",
  endedBy: "Ended by",
  completedAt: "Completed at",
  completedBy: "Completed by",
  name: "Name",
  id: "Id",
  status: "Status",
  timeSeries: "Time series",
  uptime: "Uptime",
};

type Resource = typeof en;

export const PropertyLabelsI18nBundle: I18nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForI18nBundleFromResource<Resource>(en),
};
