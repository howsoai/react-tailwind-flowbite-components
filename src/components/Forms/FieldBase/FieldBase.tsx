import { type FC, ReactNode } from "react";
import { FieldContainer, type FieldContainerProps } from "../FieldContainer";
import { FieldLabel, type FieldLabelProps } from "../FieldLabel";
import { twMerge } from "tailwind-merge";
import Styles from "./FieldBase.module.css";

export type FieldBaseProps = {
  containerProps?: FieldContainerProps;
  id?: string;
  label: FieldLabelProps["children"];
  /**
   * Moves the label into a reserved space left and center of the field.
   * You may control a set width for the field using `labelProps`.
   */
  labelInline?: boolean;
  labelProps?: Omit<FieldLabelProps, "children">;
  required?: boolean;
  sizing?: "sm" | "md" | "lg";
};
export const FieldBase: FC<
  FieldBaseProps & { field: ReactNode; extras: ReactNode }
> = ({
  containerProps,
  extras,
  field,
  id,
  label,
  labelInline,
  labelProps,
  required,
  sizing = "md",
}) => {
  return (
    <FieldContainer
      {...containerProps}
      className={twMerge(
        containerProps?.className,
        labelInline && twMerge(Styles.labelInline, "gap-x-2"),
        !labelInline && "space-y-2",
        `sizing-${sizing}`,
      )}
    >
      {label && (
        <FieldLabel
          {...labelProps}
          className={twMerge(labelProps?.className, "labelContainer")}
          htmlFor={id}
          required={required}
        >
          {label}
        </FieldLabel>
      )}
      <div className="fieldContainer">{field}</div>
      {extras && <div className="extrasContainer">{extras}</div>}
    </FieldContainer>
  );
};
