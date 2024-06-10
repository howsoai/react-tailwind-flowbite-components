import {
  type InputHTMLAttributes,
  type ReactNode,
  forwardRef,
  useId,
} from "react";
import {
  Select as FlowbiteSelect,
  SelectProps as FlowbiteSelectProps,
  HelperText,
} from "flowbite-react";
import { type UseFormRegisterReturn, useFormState } from "react-hook-form";
import { FieldBase, type FieldBaseProps } from "../FieldBase";
import { FieldErrorMessage } from "../FieldErrorMessage";

export type FieldSelectProps = FieldBaseProps &
  FlowbiteSelectProps &
  Partial<UseFormRegisterReturn>;

export const FieldSelect = forwardRef<HTMLSelectElement, FieldSelectProps>(
  (
    { containerProps, helperText, label, labelProps, name = "", ...props },
    ref,
  ): ReactNode => {
    const { errors } = useFormState();
    const internalId = useId();
    const id = props.id || internalId;

    const error = errors[name];
    const hasError = !!error;

    const additions:
      | InputHTMLAttributes<HTMLSelectElement>
      | { [key: string]: string | undefined } = {
      "aria-invalid": hasError,
      color: props.color || hasError ? "failure" : undefined,
      name,
      id,
    };

    return (
      <FieldBase
        containerProps={containerProps}
        label={label}
        labelProps={labelProps}
        id={id}
        required={props.required}
      >
        <FlowbiteSelect {...props} {...additions} ref={ref} />
        <FieldErrorMessage name={name} />
        {helperText && <HelperText color={"gray"} children={helperText} />}
      </FieldBase>
    );
  },
);
