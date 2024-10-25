import { I18nBundle } from "@howso/ui-internationalization-utils";
import { Languages } from "../constants";
import { ComponentsDataDisplayI18nBundles } from "./DataDisplay";
import { ComponentsFeedbackI18nBundles } from "./Feedback";
import { ComponentsFormsI18nBundles } from "./Forms";
import { ComponentsMarketingI18nBundles } from "./Marketing";

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
  ...ComponentsDataDisplayI18nBundles,
  ...ComponentsFeedbackI18nBundles,
  ...ComponentsFormsI18nBundles,
  ...ComponentsMarketingI18nBundles,
];
