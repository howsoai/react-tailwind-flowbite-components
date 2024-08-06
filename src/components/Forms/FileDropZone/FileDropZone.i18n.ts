import { Languages } from "@/constants";
import {
  getStringsForI18nBundleFromResource,
  I18nBundle,
} from "@howso/ui-internationalization-utils";

const namespace = "FileDropZone";

const en = {
  "accepts_{{value}}": "Allowed types: {{value}}.",
  "{{count}}_files": "{{count}} Files",
  instructionsPlural: "Select or drag and drop files.",
  instructions: "Select or drag and drop a file.",
  "maxSize_{{value}}": "Maximum size: {{value}}.",
};

type Resource = typeof en;

export const FileDropZoneI18nBundle: I18nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForI18nBundleFromResource<Resource>(en),
};
