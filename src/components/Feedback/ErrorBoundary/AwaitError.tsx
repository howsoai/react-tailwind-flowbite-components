import { useAsyncError } from "react-router-dom";
import { ErrorAlert } from ".";
import { ReactNode, useEffect } from "react";
import { getGraphicalErrorProps } from "@/helpers/errors";
import { useTranslation } from "react-i18next";

export const AwaitError = (): ReactNode => {
  const { t } = useTranslation();
  const reason = useAsyncError();
  useEffect(() => {
    console.error(reason);
  }, [reason]);

  const { description, heading } = getGraphicalErrorProps(t, reason);

  return <ErrorAlert message={heading} additionalContent={description} />;
};
