import { FC, ReactNode } from "react";
import { FieldContainer, FieldContainerProps } from "../FieldContainer";
import { FieldLabel, FieldLabelProps } from "../FieldLabel";

export type FieldBaseProps = {
  containerProps?: FieldContainerProps;
  id?: string;
  label: FieldLabelProps["children"];
  labelProps?: Omit<FieldLabelProps, "children">;
  required?: boolean;
};

export const FieldBase: FC<FieldBaseProps & { children: ReactNode }> = ({
  children,
  containerProps,
  id,
  label,
  labelProps,
  required,
}) => {
  return (
    <FieldContainer {...containerProps}>
      {label && (
        <FieldLabel {...labelProps} htmlFor={id} required={required}>
          {label}
        </FieldLabel>
      )}
      {children}
    </FieldContainer>
  );
};
