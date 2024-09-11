import { Button } from "flowbite-react";
import {
  ComponentProps,
  Dispatch,
  type FC,
  SetStateAction,
  useTransition,
} from "react";
import {
  FormProvider,
  type SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { UX } from "../../../constants";
import { useFormValues } from "../../../hooks";
import { PrimaryButton } from "../../Buttons";
import { ErrorAlert } from "../../Feedback";
import { FieldTextArea } from "../../Forms";
import { Paragraph } from "../../Typography";
import { NetPromoterFormI18nBundle as i18n } from "./NetPromoterForm.i18n";

export type NetPromoterFormValues = {
  score: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  message?: string;
};
export type NetPromoterFormProps = {
  /** Mostly a storybook prop */
  error?: Error;
  setError?: Dispatch<SetStateAction<NetPromoterFormProps["error"]>>;
  onSubmit?: SubmitHandler<NetPromoterFormValues>;
  /**
   * Controls the display of the message field.
   * If displayed, a textarea for the message and a submit button are included.
   * If not, every rating submits the form as no submit button will be available.
   *
   * Default: false
   **/
  showMessage?: boolean;
  defaultValues?: NetPromoterFormValues;
};
export const NetPromoterForm: FC<NetPromoterFormProps> = ({
  error,
  setError,
  showMessage,
  defaultValues,
  ...props
}) => {
  const { t } = useTranslation(i18n.namespace);
  const form = useForm<NetPromoterFormValues>({ defaultValues });
  const [isTransitioning, startTransition] = useTransition();

  const onSubmit: SubmitHandler<NetPromoterFormValues> = async (data) => {
    startTransition(() => {
      setError && setError(undefined);
      try {
        props.onSubmit && props.onSubmit(data);
        if (showMessage) {
          form.reset();
        }
      } catch (reason) {
        setError &&
          setError(reason instanceof Error ? reason : new Error(`${reason}`));
      }
    });
  };

  const onScoreClick = showMessage
    ? undefined
    : () => {
        const values = form.getValues();
        onSubmit(values);
      };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Paragraph marginBottom className="font-medium">
          {t(i18n.strings.description)}
        </Paragraph>
        <Scores className={UX.classes.marginBottom} onClick={onScoreClick} />
        {showMessage && (
          <>
            <Message className={UX.classes.marginBottom} />
            <div className="flex flex-row justify-end">
              <PrimaryButton type="submit" isProcessing={isTransitioning}>
                {t(i18n.strings.submit)}
              </PrimaryButton>
            </div>
          </>
        )}

        <div
          className={twMerge("starting-swipe my-4", !error && "ending-swipe")}
        >
          {error && <ErrorAlert className="my-5" error={error} />}
        </div>
      </form>
    </FormProvider>
  );
};

const scores: NetPromoterFormValues["score"][] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];
type ScoresProps = ComponentProps<"section"> & {
  onClick?: () => void;
};
const Scores: FC<ScoresProps> = ({ onClick, ...props }) => {
  const { t } = useTranslation(i18n.namespace);

  return (
    <section aria-label="Score" {...props}>
      <Paragraph className="mb-1 md:hidden">
        <div>{t(i18n.strings.scores.unlikely)}</div>
      </Paragraph>
      <div
        className={twMerge(
          "flex flex-row flex-wrap justify-between gap-2 md:gap-4",
        )}
      >
        {scores.map((score) => (
          <div className="w-[calc(20%-1rem)] md:w-auto">
            <Score key={score} number={score} onClick={onClick} />
          </div>
        ))}
      </div>
      <div className="mt-1 flex flex-row justify-between">
        <div>
          <span className="hidden md:inline">
            {t(i18n.strings.scores.unlikely)}
          </span>
        </div>
        <div>{t(i18n.strings.scores.likely)}</div>
      </div>
    </section>
  );
};

type ScoreProps = {
  number: NetPromoterFormValues["score"];
  onClick?: () => void;
};
const Score: FC<ScoreProps> = ({ number, ...props }) => {
  const { register, setValue } = useFormContext();
  const { score } = useFormValues();

  return (
    <Button
      color={score === number ? "primary" : "secondary"}
      onClick={() => {
        setValue("score", number);
        props.onClick && props.onClick();
      }}
      className="rounded-full p-0 *:p-3"
    >
      <input
        type="radio"
        className="hidden"
        {...register("score", { value: number })}
      />
      <span className={twMerge("block aspect-square w-[2ch] text-center")}>
        {number}
      </span>
    </Button>
  );
};

type MessageProps = ComponentProps<"section">;
const Message: FC<MessageProps> = (props) => {
  const { t } = useTranslation(i18n.namespace);
  const { register } = useFormContext();

  return (
    <section {...props}>
      <FieldTextArea
        label={t(i18n.strings.message.label)}
        autoComplete="false"
        placeholder={t(i18n.strings.message.placeholder)}
        {...register("message", { maxLength: 1000 })}
      />
    </section>
  );
};
