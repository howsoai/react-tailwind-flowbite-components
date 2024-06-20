import {
  type InputHTMLAttributes,
  type ReactNode,
  forwardRef,
  useId,
} from "react";
import { type UseFormRegisterReturn, useFormState } from "react-hook-form";
import {
  Checkbox,
  type CheckboxProps,
  HelperText,
  Label,
} from "flowbite-react";
import { FieldContainer } from "../FieldContainer";
import { type FieldBaseProps } from "../FieldBase";
import { FieldErrorMessage } from "../FieldErrorMessage";
import { twMerge } from "tailwind-merge";
import { fieldLabelSizing } from "../FieldLabel";

export type FieldCheckboxProps = Omit<FieldBaseProps, "labelInline"> & {
  helperText?: ReactNode;
} & CheckboxProps &
  Partial<UseFormRegisterReturn>;

export const FieldCheckbox = forwardRef<HTMLInputElement, FieldCheckboxProps>(
  (
    {
      color,
      containerProps,
      helperText,
      label,
      labelProps,
      name = "",
      sizing,
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
            <Label
              {...labelProps}
              className={twMerge(
                labelProps?.className,
                sizing && fieldLabelSizing[sizing],
              )}
              htmlFor={id}
            >
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
