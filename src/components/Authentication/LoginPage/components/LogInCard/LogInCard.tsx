import { FC, ReactNode } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../../../../Buttons";
import { ErrorAlert } from "../../../../Feedback";
import {
  FieldPassword,
  FieldPasswordProps,
  FieldText,
} from "../../../../Forms";
import { Card } from "../../../../Surfaces";
import { LoginPageI18nBundle as i18n } from "../../i18n";

export type FormValues = {
  identifier: string;
  password: string;
};
export type LogInCardProps = FormProps & {
  /** A <Card.Header /> if desired */
  cardHeader?: ReactNode;
  error?: Error;
  onSubmit: (values: FormValues) => void;
};

export const LogInCard: FC<LogInCardProps> = ({
  onSubmit,
  error,
  cardHeader,
  ...formProps
}) => {
  // const { t } = useTranslation(i18n.namespace);
  const form = useForm<FormValues>({
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  return (
    <Card className="margin-x-auto relative">
      {cardHeader}
      <Card.Content>
        <FormProvider {...form}>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Form {...formProps} />
          </form>
        </FormProvider>
        {error && <ErrorAlert className="mt-4" error={error} />}
      </Card.Content>
    </Card>
  );
};

type FormProps = {
  type: "email" | "username";
  identifierProps?: Omit<FieldPasswordProps, "autoFocus" | "type">;
  passwordProps?: Omit<FieldPasswordProps, "autoFocus" | "type">;
  isLoading?: boolean;
  resetPassword?: ReactNode;
};
const Form: FC<FormProps> = ({
  type,
  identifierProps,
  passwordProps,
  isLoading = false,
  resetPassword,
}) => {
  const { t } = useTranslation(i18n.namespace);
  const { register } = useFormContext<FormValues>();

  const identifierStrings =
    type === "username"
      ? i18n.strings.form.fields.username
      : i18n.strings.form.fields.email;

  return (
    <div className="space-y-2">
      <FieldText
        type={type === "email" ? "email" : "text"}
        autoComplete={type === "email" ? "email" : "username"}
        sizing={"lg"}
        label={null}
        placeholder={t(identifierStrings.label)}
        autoFocus
        {...identifierProps}
        {...register("identifier", { required: true })}
        disabled={isLoading}
      />
      <FieldPassword
        id={"current-password"}
        autoComplete={"current-password"}
        sizing={"lg"}
        label={null}
        placeholder={t(i18n.strings.form.fields.password.label)}
        {...passwordProps}
        {...register("password", { required: true })}
        disabled={isLoading}
      />

      {resetPassword}
      <PrimaryButton
        type="submit"
        fullSized
        isProcessing={isLoading}
        disabled={isLoading}
      >
        {t(i18n.strings.form.actions.login)}
      </PrimaryButton>
    </div>
  );
};
