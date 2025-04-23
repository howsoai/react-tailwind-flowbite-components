import { forwardRef } from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { FieldBaseProps } from "../FieldBase";
import { FieldText, FieldTextProps } from "../FieldText/FieldText";

export type FieldTextListProps = FieldBaseProps &
  Pick<FieldTextProps, "helperText" | "placeholder" | "sizing"> &
  Omit<ControllerProps, "render"> & {
    onChange?: FieldTextListChangeHandler;
    onBlur?: FieldTextListChangeHandler;
    /** Identifying character. White space will be trimmed. Default: "," */
    separator?: string;
    /** If a space should be added between items in the field for visual purposes */
    spaceAfterSeparator?: boolean;
    valueAsNumber?: boolean;
  };
type Value = string | number;
/** Like the standard change handler but with the values */
type FieldTextListChangeHandler = (
  event: {
    target: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    type?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  },
  values: Value[],
) => Promise<void | boolean>;
/**
 * @deprecated This component has caused a number of problems.
 * Use <FieldText /> directly and perform any split and conversion logic in the submit handler.
 *
 * A thin wrapper around FieldText enables arrays to be used as form values.
 * Props are based on a combination of standard Field* and ControllerProps.
 * Values are driven through FormProvider's state, not direct props.
 */
export const FieldTextList = forwardRef<HTMLInputElement, FieldTextListProps>(
  (
    {
      containerProps,
      helperText,
      label,
      labelInline,
      labelProps,
      onBlur,
      onChange,
      placeholder,
      separator = ",",
      spaceAfterSeparator = true,
      valueAsNumber,
      ...props
    },
    ref,
  ) => {
    return (
      <Controller
        {...props}
        render={({ field }) => (
          <FieldText
            {...field}
            ref={ref}
            containerProps={containerProps}
            label={label}
            labelInline={labelInline}
            labelProps={labelProps}
            helperText={helperText}
            onChange={async (event) => {
              const value = event.target.value;
              const values = getValues({
                separator,
                value,
                valueAsNumber,
                // Do not alter the user's inputs. The filter would eat new lines.
                filter: false,
              });
              field.onChange(values);
              onChange && onChange(event, values);
            }}
            onBlur={async (event) => {
              field.onBlur();
              const value = event.target.value;
              const values = getValues({
                separator,
                value,
                valueAsNumber,
                // Do alter the user's inputs. We want clean, trimmed values since they are done.
                filter: true,
              });

              field.onChange(values);
              onBlur && onBlur(event, values);
            }}
            placeholder={placeholder}
            required={props.required}
            value={
              field.value
                ? getText({
                    separator,
                    spaceAfterSeparator,
                    value: field.value,
                  })
                : undefined
            }
          />
        )}
      />
    );
  },
);

const getText = ({
  separator,
  spaceAfterSeparator,
  value,
}: {
  separator: string;
  spaceAfterSeparator: boolean;
  value: Value[];
}): string => {
  if (!value) {
    return "";
  }

  const glue = spaceAfterSeparator ? [separator, " "].join("") : separator;
  const newValue = value
    .map((value) => (typeof value === "string" ? value.trim() : value))
    .join(glue);
  return newValue;
};

const getValues = ({
  separator,
  value,
  valueAsNumber,
  filter,
}: Pick<FieldTextListProps, "valueAsNumber"> & {
  separator: string;
  value: string;
  filter?: boolean;
}): Value[] => {
  if (!value) {
    return [];
  }

  return value
    .split(separator)
    .map((string) => (filter ? string.trim() : string))
    .filter((string) => (filter ? !!string : true))
    .map((string) => (valueAsNumber ? Number(string) : string));
};
