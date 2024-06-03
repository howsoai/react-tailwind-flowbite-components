import { InputHTMLAttributes, ReactNode, useId } from "react";
import { forwardRef } from "react";
import { UseFormRegisterReturn, useFormState } from "react-hook-form";
import { FieldContainer } from "../FieldContainer";
import { Checkbox, CheckboxProps, HelperText, Label } from "flowbite-react";
import { FieldBaseProps } from "../FieldBase";
import { FieldErrorMessage } from "..";

export type FieldToggleProps = FieldBaseProps & {
  helperText?: ReactNode;
} & CheckboxProps &
  Partial<UseFormRegisterReturn>;

export const FieldCheckbox = forwardRef<HTMLInputElement, FieldToggleProps>(
  (
    {
      color,
      containerProps,
      helperText,
      label,
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
    color = color ? color : hasError ? "failure" : "blue";

    const additions:
      | InputHTMLAttributes<HTMLInputElement>
      | { [key: string]: string | undefined } = {
      "aria-invalid": hasError,
      id,
      name,
    };

    return (
      <FieldContainer {...containerProps}>
        <div className="flex gap-2">
          <div>
            <Checkbox {...props} {...additions} color={color} ref={ref} />
          </div>
          <div className="space-y-1">
            <Label {...labelProps} htmlFor={id}>
              {label}
            </Label>
            <FieldErrorMessage name={name} />
            {helperText && <HelperText color={"gray"} children={helperText} />}
          </div>
        </div>
      </FieldContainer>
    );
  },
);
