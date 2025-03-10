import { I18nBundle } from "@howso/ui-internationalization-utils";
import { ComponentsI18nBundles } from "./components";
import { AuthenticationI18nBundles } from "./components/Authentication";
import { Languages } from "./constants";
import "./main.css";

export * from "./(assets)";
export * from "./components";
export * from "./constants";
export * from "./hooks";
export * from "./themes";
export * from "./utils";

export const I18nBundles: I18nBundle<Languages, any>[] = [
  ...ComponentsI18nBundles,
  ...AuthenticationI18nBundles,
];
