import { ErrorMessage } from "@hookform/error-message";
import { HelperText } from "flowbite-react";
import { FC } from "react";
import { useFormState } from "react-hook-form";
import { FieldErrorMessageIl8nBundle } from "./FieldErrorMessage.il8n";
import { useTranslation } from "react-i18next";

export type FieldErrorMessageProps = {
  name: string;
};
export const FieldErrorMessage: FC<FieldErrorMessageProps> = ({ name }) => {
  const { t } = useTranslation(FieldErrorMessageIl8nBundle.namespace);
  const { errors } = useFormState();
  const error = errors[name];
  if (!error) {
    return null;
  }

  // Use the exact message if supplied
  let message = error.message;
  // Use a translation of the type if we have it
  if (!message) {
    const translationKey = `type.${error?.type}`;
    const translation = t(translationKey);
    if (translation !== translationKey) {
      message = translation;
    }
  }

  return (
    <HelperText color={"failure"}>
      <>{message || <ErrorMessage name={name} />}</>
    </HelperText>
  );
};
