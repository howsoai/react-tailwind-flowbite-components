import { I18nBundle } from "@howso/ui-internationalization-utils";
import { Languages } from "../../constants";
import { ErrorAlertI18nBundle } from "./ErrorAlert";
import { NoResultsAlertI18nBundle } from "./NoResultsAlert";
import { SkeletonI18nBundle } from "./Skeleton";

export * from "./ErrorAlert";
export * from "./ErrorBoundary";
export * from "./ErrorGraphic";
export * from "./GraphicalError";
export * from "./NoResultsAlert";
export * from "./Progress";
export * from "./Skeleton";
export * from "./TextScramble";

export const ComponentsFeedbackI18nBundles: I18nBundle<Languages, any>[] = [
  ErrorAlertI18nBundle,
  NoResultsAlertI18nBundle,
  SkeletonI18nBundle,
];
