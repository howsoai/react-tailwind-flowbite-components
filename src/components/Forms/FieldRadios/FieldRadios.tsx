import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { HelperText, getTheme, Label } from "flowbite-react";
import { FieldBase, type FieldBaseProps } from "../FieldBase";
import { twMerge } from "tailwind-merge";
import { useFormState, type UseFormRegisterReturn } from "react-hook-form";
import { FieldTextProps } from "../FieldText";
import { FieldErrorMessage } from "../FieldErrorMessage";
import { Radio, RadioProps } from "../Radio";

type FieldRadioOption = { value: string | number; text?: ReactNode };
export type FieldRadiosProps = FieldBaseProps & {
  helperText: FieldTextProps["helperText"];
  name: string;
  options: FieldRadioOption[];
} & Omit<RadioProps, "name"> &
  Partial<UseFormRegisterReturn>;

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
      required,
      sizing = "md",
      ...props
    },
    ref,
  ) => {
    const theme = getTheme();
    const { errors } = useFormState();

    const error = errors[name];
    const hasError = !!error;
    const additions:
      | InputHTMLAttributes<HTMLInputElement>
      | { [key: string]: string | undefined } = {
      "aria-invalid": hasError,
      color: props.color || hasError ? "failure" : undefined,
      name,
    };
    const hasExtras = hasError || !!helperText;
    const propsValue = props.value || props.defaultValue;

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
                  <Label className="flex flex-nowrap gap-1.5 items-center">
                    <Radio
                      {...props}
                      {...additions}
                      value={value}
                      checked={propsValue === value}
                    />{" "}
                    {text}
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
