import { Alert, AlertProps } from "flowbite-react";
import { ReactNode } from "react";
import { WarningIcon } from "../../Icons";
import { ErrorAlertIl8nBundle } from "./ErrorAlert.il8n";
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
  const { t } = useTranslation(ErrorAlertIl8nBundle.namespace);

  return (
    <Alert icon={icon} color={color} {...props}>
      <span>
        {message || error?.message || t(ErrorAlertIl8nBundle.strings.generic)}
      </span>
    </Alert>
  );
};
