import { I18nBundle } from "@howso/ui-internationalization-utils";
import { Languages } from "../constants";
import { ComponentsAuthenticationI18nBundles } from "./Authentication";
import { ComponentsDataDisplayI18nBundles } from "./DataDisplay";
import { ComponentsFeedbackI18nBundles } from "./Feedback";
import { ComponentsFormsI18nBundles } from "./Forms";
import { ComponentsMarketingI18nBundles } from "./Marketing";
import { ComponentsNavigationI18nBundles } from "./Navigation";

export * from "./Authentication";
export * from "./Buttons";
export * from "./DataDisplay";
export * from "./Feedback";
export * from "./Forms";
export * from "./Icons";
export * from "./Marketing";
export * from "./Navigation";
export * from "./Surfaces";
export * from "./Typography";

export const ComponentsI18nBundles: I18nBundle<Languages, any>[] = [
  ...ComponentsAuthenticationI18nBundles,
  ...ComponentsDataDisplayI18nBundles,
  ...ComponentsFeedbackI18nBundles,
  ...ComponentsFormsI18nBundles,
  ...ComponentsMarketingI18nBundles,
  ...ComponentsNavigationI18nBundles,
];
