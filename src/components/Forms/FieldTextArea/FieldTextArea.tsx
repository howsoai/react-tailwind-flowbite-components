import { type InputHTMLAttributes, forwardRef, useId } from "react";
import {
  Textarea as FlowbiteFieldTextArea,
  type TextareaProps as FlowbiteFieldTextAreaProps,
  HelperText,
} from "flowbite-react";
import { type UseFormRegisterReturn, useFormState } from "react-hook-form";
import { FieldBase, type FieldBaseProps } from "../FieldBase";
import { FieldErrorMessage } from "../FieldErrorMessage";

export type FieldTextAreaProps = Omit<FieldBaseProps, "sizing"> &
  FlowbiteFieldTextAreaProps &
  Partial<UseFormRegisterReturn>;

export const FieldTextArea = forwardRef<
  HTMLTextAreaElement,
  FieldTextAreaProps
>(
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
      | InputHTMLAttributes<HTMLTextAreaElement>
      | { [key: string]: string | undefined } = {
      "aria-invalid": hasError,
      color: props.color || hasError ? "failure" : undefined,
      id,
      name,
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
        field={<FlowbiteFieldTextArea {...props} {...additions} ref={ref} />}
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
