import { Languages } from "@/constants";
import {
  getStringsForI18nBundleFromResource,
  I18nBundle,
} from "@howso/ui-internationalization-utils";

const namespace = "FileDropZone";

const en = {
  "accepts_{{value}}": "Allowed types: {{value}}.",
  "{{count}}_files": "{{count}} Files",
  instructionsPlural: "Drag & Drop or select your files here.",
  instructions: "Drag & Drop or select your file here.",
  "maxSize_{{value}}": "Maximum size: {{value}}.",
  browse: "Browse files",
};

type Resource = typeof en;

export const FileDropZoneI18nBundle: I18nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForI18nBundleFromResource<Resource>(en),
};
