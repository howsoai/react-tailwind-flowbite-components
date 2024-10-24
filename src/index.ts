import { I18nBundle } from "@howso/ui-internationalization-utils";
import {
  BooleanTextI18nBundle,
  CodeBlockI18nBundle,
  ErrorAlertI18nBundle,
  FieldErrorMessageI18nBundle,
  FieldLabelI18nBundle,
  FileDropZoneI18nBundle,
  NetPromoterFormI18nBundle,
  NoResultsAlertI18nBundle,
  SkeletonI18nBundle,
} from "./components";
import { Languages } from "./constants";
import "./main.css";

export * from "./components";
export * from "./constants";
export * from "./hooks";
export * from "./themes";
export * from "./utils";

export const I18nBundles: I18nBundle<Languages, any>[] = [
  BooleanTextI18nBundle,
  CodeBlockI18nBundle,
  ErrorAlertI18nBundle,
  FieldLabelI18nBundle,
  FieldErrorMessageI18nBundle,
  FileDropZoneI18nBundle,
  NetPromoterFormI18nBundle,
  NoResultsAlertI18nBundle,
  SkeletonI18nBundle,
];
