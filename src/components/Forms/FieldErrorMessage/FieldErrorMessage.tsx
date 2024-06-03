import { ErrorMessage } from "@hookform/error-message";
import { HelperText } from "flowbite-react";
import { FC } from "react";
import { useFormState } from "react-hook-form";
import { useTranslation } from "react-i18next";

export type FieldErrorMessageProps = {
  name: string;
};
export const FieldErrorMessage: FC<FieldErrorMessageProps> = ({ name }) => {
  const { t } = useTranslation("common");
  const { errors } = useFormState();
  const error = errors[name];
  if (!error) {
    return null;
  }

  // Use the exact message if supplied
  let message = error.message;
  // Use a translation of the type if have it
  if (!message) {
    const translationKey = `validation.${error?.type}`;
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
