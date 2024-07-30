import { Alert, AlertProps } from "flowbite-react";
import { ReactNode } from "react";
import { WarningIcon } from "../../Icons";
import { ErrorAlertI18nBundle } from "./ErrorAlert.i18n";
import { useTranslation } from "react-i18next";

export type ErrorAlertProps = Omit<AlertProps, "children"> & {
  message?: ReactNode;
  error?: Error;
};

export const ErrorAlert = ({
  message,
  error,
  icon = WarningIcon,
  color = "failure",
  ...props
}: ErrorAlertProps): ReactNode => {
  const { t } = useTranslation(ErrorAlertI18nBundle.namespace);

  return (
    <Alert icon={icon} color={color} {...props}>
      <span>
        {message || error?.message || t(ErrorAlertI18nBundle.strings.generic)}
      </span>
    </Alert>
  );
};
