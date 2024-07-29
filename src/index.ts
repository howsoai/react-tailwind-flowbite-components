import { Il8nBundle } from "@howso/ui-internationalization-utils";
import {
  BooleanTextIl8nBundle,
  CodeBlockIl8nBundle,
  ErrorAlertIl8nBundle,
  FieldLabelIl8nBundle,
  SkeletonIl8nBundle,
} from "./components";
import "./main.css";
import { Languages } from "./constants";

export * from "./constants";
export * from "./components";
export * from "./hooks";
export * from "./themes";
export * from "./utils";

export const Il8nBundles: Il8nBundle<Languages, any>[] = [
  BooleanTextIl8nBundle,
  CodeBlockIl8nBundle,
  ErrorAlertIl8nBundle,
  FieldLabelIl8nBundle,
  SkeletonIl8nBundle,
];
