import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { HelperText, Label, getTheme } from "flowbite-react";
import { FieldBase, type FieldBaseProps } from "../FieldBase";
import { twMerge } from "tailwind-merge";
import {
  type RegisterOptions,
  useFormContext,
  useFormState,
  type UseFormRegisterReturn,
} from "react-hook-form";
import { FieldTextProps } from "../FieldText";
import { Radio, RadioProps } from "../Radio";
import { FieldErrorMessage } from "../FieldErrorMessage";
import { FieldLabel, fieldLabelSizing } from "../FieldLabel";

type FieldRadioOption = { value: string | number; text?: ReactNode };
export type FieldRadiosProps = FieldBaseProps & {
  helperText?: FieldTextProps["helperText"];
  name: string;
  options: FieldRadioOption[];
  registerOptions?: RegisterOptions;
} & Omit<RadioProps, "name"> &
  Omit<Partial<UseFormRegisterReturn>, "defaultValue">;

/**
 * A thin wrapper around Radio components.
 * Props are based on a combination of standard Field* and ControllerProps.
 * Values are driven through FormProvider's state, not direct props.
 */
export const FieldRadios = forwardRef<HTMLDivElement, FieldRadiosProps>(
  (
    {
      containerProps,
      helperText,
      label,
      labelInline,
      labelProps,
      name,
      options,
      registerOptions,
      required,
      sizing = "md",
      ...props
    },
    ref,
  ) => {
    const theme = getTheme();
    const { register } = useFormContext();
    const { errors } = useFormState();

    const error = errors[name];
    const hasError = !!error;
    const additions:
      | InputHTMLAttributes<HTMLInputElement>
      | { [key: string]: string | undefined } = {
      "aria-invalid": hasError,
      color: props.color || hasError ? "failure" : undefined,
    };
    const hasExtras = hasError || !!helperText;

    return (
      <FieldBase
        containerProps={containerProps}
        label={label}
        labelInline={labelInline}
        labelProps={labelProps}
        sizing={sizing}
        required={required}
        field={
          <div className={twMerge(theme.textInput.base)}>
            <div className={twMerge(theme.textInput.field.base)}>
              <div
                className={twMerge(
                  sizing && theme.textInput.field.input.sizes[sizing],
                  "flex flex-row flex-wrap gap-6 pl-0.5",
                )}
                ref={ref}
              >
                {options.map(({ value, text }) => (
                  <Label
                    key={value}
                    className={twMerge(
                      "flex flex-row flex-nowrap gap-1.5 items-center",
                      sizing && fieldLabelSizing[sizing],
                    )}
                  >
                    <Radio
                      {...additions}
                      {...register(name, registerOptions)}
                      value={value}
                    />
                    <div>{text || value}</div>
                  </Label>
                ))}
              </div>
            </div>
          </div>
        }
        extras={
          hasExtras && (
            <>
              <FieldErrorMessage name={name} />
              {helperText && (
                <HelperText color={"gray"} children={helperText} />
              )}
            </>
          )
        }
      />
    );
  },
);
