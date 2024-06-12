import { FC, ReactNode } from "react";
import { FieldContainer, FieldContainerProps } from "../FieldContainer";
import { FieldLabel, FieldLabelProps } from "../FieldLabel";
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
}) => {
  return (
    <FieldContainer
      {...containerProps}
      className={twMerge(
        containerProps?.className,
        labelInline && twMerge(Styles["label-inline"], "gap-x-4 gap-y-2"),
        !labelInline && "space-y-2",
      )}
    >
      {label && (
        <FieldLabel
          {...labelProps}
          className={twMerge(labelProps?.className, "label-container")}
          htmlFor={id}
          required={required}
        >
          {label}
        </FieldLabel>
      )}
      <div className="field-container">{field}</div>
      <div className="extras-container">{extras}</div>
    </FieldContainer>
  );
};
