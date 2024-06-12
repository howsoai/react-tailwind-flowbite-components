import { type InputHTMLAttributes, forwardRef, useId } from "react";
import {
  TextInput as FlowbiteFieldText,
  type TextInputProps as FlowbiteFieldTextProps,
  HelperText,
} from "flowbite-react";
import { type UseFormRegisterReturn, useFormState } from "react-hook-form";
import { FieldBase, type FieldBaseProps } from "../FieldBase";
import { FieldErrorMessage } from "../FieldErrorMessage";

export type FieldTextProps = FieldBaseProps & {
  options?: string[];
} & FlowbiteFieldTextProps &
  Partial<UseFormRegisterReturn>;

export const FieldText = forwardRef<HTMLInputElement, FieldTextProps>(
  (
    {
      containerProps,
      helperText,
      label,
      labelInline,
      labelProps,
      name = "",
      options,
      ...props
    },
    ref,
  ) => {
    const { errors } = useFormState();
    const internalId = useId();
    const id = props.id || internalId;
    const datalistId = `${id}-datalist`;
    const hasOptions = options?.length;

    const error = errors[name];
    const hasError = !!error;

    const additions:
      | InputHTMLAttributes<HTMLInputElement>
      | { [key: string]: string | undefined } = {
      "aria-invalid": hasError,
      color: props.color || hasError ? "failure" : undefined,
      name,
      id,
    };
    const hasExtras = hasError || !!helperText;

    return (
      <FieldBase
        containerProps={containerProps}
        label={label}
        labelInline={labelInline}
        labelProps={labelProps}
        id={id}
        required={props.required}
        field={
          <>
            <FlowbiteFieldText
              {...props}
              {...additions}
              ref={ref}
              list={hasOptions ? datalistId : undefined}
            />
            {(options?.length ?? 0) > 0 && (
              <datalist id={datalistId}>
                {options?.map((option) => (
                  <option key={option} value={option} />
                ))}
              </datalist>
            )}
          </>
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
