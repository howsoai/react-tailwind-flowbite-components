import { FileInput, FileInputProps, HelperText } from "flowbite-react";
import { forwardRef, ReactNode, useId, type InputHTMLAttributes } from "react";
import { UseFormRegisterReturn, useFormState } from "react-hook-form";
import { FieldBase, type FieldBaseProps } from "../FieldBase";
import { FieldErrorMessage } from "../FieldErrorMessage";

export type FieldFileProps = Omit<FieldBaseProps, "required"> & {
  value: ReactNode;
} & FileInputProps &
  Partial<UseFormRegisterReturn>;

export const FieldFile = forwardRef<HTMLInputElement, FieldFileProps>(
  (
    {
      containerProps,
      helperText,
      label,
      labelInline,
      labelProps,
      name = "",
      ...props
    },
    ref,
  ) => {
    const { errors } = useFormState();
    const internalId = useId();
    const id = props.id || internalId;

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
        sizing={props.sizing}
        field={<FileInput {...props} {...additions} ref={ref} />}
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
