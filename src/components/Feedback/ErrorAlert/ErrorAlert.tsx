import { Alert, AlertProps } from "flowbite-react";
import { ReactNode } from "react";
import { WarningIcon } from "../../Icons";
import { useDefaultTranslation } from "@/hooks";

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
  const { t } = useDefaultTranslation();

  return (
    <Alert icon={icon} color={color} {...props}>
      <span>
        {message || error?.message || t("Feedback.ErrorAlert.Generic")}
      </span>
    </Alert>
  );
};
