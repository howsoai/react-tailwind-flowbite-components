import { I18nBundle } from "@howso/ui-internationalization-utils";
import { Languages } from "../../constants";
import { NetPromoterFormI18nBundle } from "./NetPromoterForm";

export * from "./NetPromoterForm";

export const ComponentsMarketingI18nBundles: I18nBundle<Languages, any>[] = [
  NetPromoterFormI18nBundle,
];
