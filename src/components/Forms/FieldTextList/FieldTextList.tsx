import { forwardRef } from "react";
import { FieldText, FieldTextProps } from "../FieldText/FieldText";
import { Controller, ControllerProps } from "react-hook-form";
import { FieldBaseProps } from "../FieldBase";

export type FieldTextListProps = FieldBaseProps &
  Pick<FieldTextProps, "helperText" | "placeholder"> &
  Omit<ControllerProps, "render"> & {
    defaultValue?: Value[];
    onChange?: FieldTextListChangeHandler;
    onBlur?: FieldTextListChangeHandler;
    /** Identifying character. White space will be trimmed. Default: "," */
    separator?: string;
    /** If a space should be added between items in the field for visual purposes */
    spaceAfterSeparator?: boolean;
    value?: Value[];
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
 * A thin wrapper around FieldText enables arrays to be used as form values.
 * Props are based on a combination of standard Field* and ControllerProps
 */
export const FieldTextList = forwardRef<HTMLInputElement, FieldTextListProps>(
  (
    {
      containerProps,
      defaultValue,
      helperText,
      label,
      labelProps,
      onBlur,
      onChange,
      placeholder,
      separator = ",",
      spaceAfterSeparator = true,
      value,
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
            labelProps={labelProps}
            helperText={helperText}
            defaultValue={
              defaultValue
                ? getText({
                    separator,
                    spaceAfterSeparator,
                    value: defaultValue,
                  })
                : undefined
            }
            onChange={async (event) => {
              const value = event.target.value;
              const values = getValues({ separator, value, valueAsNumber });
              field.onChange(values);
              onChange && onChange(event, values);
            }}
            onBlur={async (event) => {
              field.onBlur();
              if (!onBlur) {
                return;
              }
              const value = event.target.value;
              const values = getValues({ separator, value, valueAsNumber });
              onBlur(event, values);
            }}
            placeholder={placeholder}
            value={
              value
                ? getText({ separator, spaceAfterSeparator, value })
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
}: Pick<FieldTextListProps, "value"> & {
  separator: string;
  spaceAfterSeparator: boolean;
}): string => {
  if (!value) {
    return "";
  }

  const glue = spaceAfterSeparator ? [separator, " "].join("") : separator;
  return value.join(glue);
};

const getValues = ({
  separator,
  value,
  valueAsNumber,
}: Pick<FieldTextListProps, "valueAsNumber"> & {
  separator: string;
  value: string;
}): Value[] => {
  if (!value) {
    return [];
  }

  return value
    .split(separator)
    .map((string) => string.trim())
    .filter(Boolean)
    .map((string) => (valueAsNumber ? Number(string) : string));
};
