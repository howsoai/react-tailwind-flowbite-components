import { Label, type LabelProps } from "flowbite-react";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type FieldLabelProps = LabelProps & {
  required?: boolean;
  suffix?: ReactNode;
};
export const FieldLabel: FC<FieldLabelProps> = ({
  required,
  children,
  suffix,
  ...props
}) => (
  <Label {...props} className={twMerge("flex items-center", props.className)}>
    <div>
      <span>{children}</span>
      {required && (
        <span aria-hidden="true" className="text-red-600 dark:text-red-400">
          *
        </span>
      )}
    </div>
    {suffix}
  </Label>
);
