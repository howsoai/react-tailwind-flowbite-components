import { I18nBundle } from "@howso/ui-internationalization-utils";
import { Languages } from "../../constants";
import { PaginationI18nBundle } from "./Pagination/Pagination.i18n";

export * from "./Stepper";

export const ComponentsNavigationI18nBundles: I18nBundle<Languages, any>[] = [
  PaginationI18nBundle,
];
