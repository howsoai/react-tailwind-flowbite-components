import { I18nBundle } from "@howso/ui-internationalization-utils";
import { Languages } from "../../constants";
import { BooleanTextI18nBundle } from "./BooleanText";
import { CodeBlockI18nBundle } from "./CodeBlock";
import { DateDiffI18nBundle } from "./DateDiff";
import { DateLongI18nBundle } from "./DateLong";
import { DateShortI18nBundle } from "./DateShort";
import { DateTimeShortI18nBundle } from "./DateTimeShort";
import { PropertyLabelsI18nBundle } from "./PropertyLabels";

export * from "./BooleanText";
export * from "./CodeBlock";
export * from "./DataTable";
export * from "./DateDiff";
export * from "./DateLong";
export * from "./DateShort";
export * from "./DateTimeShort";
export * from "./PropertyLabels";
export * from "./TableHeadCell";

export const ComponentsDataDisplayI18nBundles: I18nBundle<Languages, any>[] = [
  BooleanTextI18nBundle,
  CodeBlockI18nBundle,
  DateDiffI18nBundle,
  DateLongI18nBundle,
  DateShortI18nBundle,
  DateTimeShortI18nBundle,
  PropertyLabelsI18nBundle,
];
