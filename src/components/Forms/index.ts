import { I18nBundle } from "@howso/ui-internationalization-utils";
import { Languages } from "../../constants";
import { FieldErrorMessageI18nBundle } from "./FieldErrorMessage";
import { FieldLabelI18nBundle } from "./FieldLabel";
import { FileDropZoneI18nBundle } from "./FileDropZone";

export * from "./constants";
export * from "./FieldCheckbox";
export * from "./FieldContainer";
export * from "./FieldErrorMessage";
export * from "./FieldFile";
export * from "./FieldLabel";
export * from "./FieldRadios";
export * from "./FieldSelect";
export * from "./FieldStatic";
export * from "./FieldText";
export * from "./FieldTextArea";
export * from "./FieldTextAreaList";
export * from "./FieldTextList";
export * from "./FileDropZone";
export * from "./FormModal";
export * from "./Radio";
export * from "./ToggleInput";

export const ComponentsFormsI18nBundles: I18nBundle<Languages, any>[] = [
  FieldLabelI18nBundle,
  FieldErrorMessageI18nBundle,
  FileDropZoneI18nBundle,
];
