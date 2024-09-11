import { forwardRef } from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { FieldBaseProps } from "../FieldBase";
import {
  FieldTextArea,
  FieldTextAreaProps,
} from "../FieldTextArea/FieldTextArea";

export type FieldTextAreaListProps = FieldBaseProps &
  Pick<FieldTextAreaProps, "helperText" | "placeholder" | "rows"> &
  Omit<ControllerProps, "render"> & {
    onChange?: FieldTextAreaListChangeHandler;
    onBlur?: FieldTextAreaListChangeHandler;
    /** Identifying character. White space will be trimmed. Default: "," */
    separator?: string;
    /** If a space should be added between items in the field for visual purposes */
    spaceAfterSeparator?: boolean;
    valueAsNumber?: boolean;
  };
type Value = string | number;
/** Like the standard change handler but with the values */
type FieldTextAreaListChangeHandler = (
  event: {
    target: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    type?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  },
  values: Value[],
) => Promise<void | boolean>;
/**
 * A thin wrapper around FieldText enables arrays to be used as form values.
 * Props are based on a combination of standard Field* and ControllerProps.
 * Values are driven through FormProvider's state, not direct props.
 */
export const FieldTextAreaList = forwardRef<
  HTMLTextAreaElement,
  FieldTextAreaListProps
>(
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
      rows,
      separator = "\n",
      spaceAfterSeparator = false,
      valueAsNumber,
      ...props
    },
    ref,
  ) => {
    return (
      <Controller
        {...props}
        render={({ field }) => (
          <FieldTextArea
            {...field}
            ref={ref}
            containerProps={containerProps}
            label={label}
            labelInline={labelInline}
            labelProps={labelProps}
            helperText={helperText}
            required={props.required}
            rows={rows}
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
  return value.join(glue);
};

const getValues = ({
  separator,
  value,
  valueAsNumber,
  filter = false,
}: Pick<FieldTextAreaListProps, "valueAsNumber"> & {
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
