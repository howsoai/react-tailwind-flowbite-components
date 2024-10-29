import { Alert, AlertProps } from "flowbite-react";
import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import { NoResultsAlertI18nBundle as i18n } from "./NoResultsAlert.i18n";

type NoResultsAlertProps = Partial<AlertProps> & {
  /** Pre-translated pluralized version of the noun. Default: 'results' */
  nouns?: string;
};
export const NoResultsAlert: FC<NoResultsAlertProps> = ({
  nouns,
  ...props
}) => {
  const { t } = useTranslation(i18n.namespace);

  return (
    <Alert color="gray" {...props}>
      <Trans
        t={t}
        i18nKey={i18n.strings["no{{nouns}}Found"]}
        values={{ nouns: nouns || t(i18n.strings.results) }}
      />
    </Alert>
  );
};
