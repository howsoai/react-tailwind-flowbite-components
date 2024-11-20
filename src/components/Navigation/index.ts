import { I18nBundle } from "@howso/ui-internationalization-utils";
import { Languages } from "../../constants";
import { PaginationI18nBundle } from "./Pagination/Pagination.i18n";

export * from "./NavTabs";
export * from "./Pagination";
export * from "./RouterLink";
export * from "./Stepper";
// export * from "./Tabs"; // Just stories

export const ComponentsNavigationI18nBundles: I18nBundle<Languages, any>[] = [
  PaginationI18nBundle,
];
