import { I18nBundle } from "@howso/ui-internationalization-utils";
import {
  BooleanTextI18nBundle,
  CodeBlockI18nBundle,
  ErrorAlertI18nBundle,
  FieldLabelI18nBundle,
  FieldErrorMessageI18nBundle,
  SkeletonI18nBundle,
} from "./components";
import "./main.css";
import { Languages } from "./constants";

export * from "./constants";
export * from "./components";
export * from "./hooks";
export * from "./themes";
export * from "./utils";

export const I18nBundles: I18nBundle<Languages, any>[] = [
  BooleanTextI18nBundle,
  CodeBlockI18nBundle,
  FieldLabelI18nBundle,
  FieldErrorMessageI18nBundle,
  ErrorAlertI18nBundle,
  SkeletonI18nBundle,
];
