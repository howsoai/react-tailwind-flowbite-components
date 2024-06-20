import { useDefaultTranslation } from "@/hooks";
import { Label, type LabelProps } from "flowbite-react";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type FieldLabelProps = LabelProps & {
  required?: boolean;
  sizing?: LabelSize;
  suffix?: ReactNode;
};
export const FieldLabel: FC<FieldLabelProps> = ({
  required,
  children,
  sizing,
  suffix,
  ...props
}) => {
  const { t } = useDefaultTranslation();

  return (
    <Label
      {...props}
      className={twMerge(
        "flex items-center",
        sizing && fieldLabelSizing[sizing],
        props.className,
      )}
    >
      <div>
        <span>{children}</span>
        {required && (
          <span
            aria-hidden="true"
            title={t("Forms.FieldLabel.required")}
            className="text-red-600 dark:text-red-400"
          >
            *
          </span>
        )}
      </div>
      {suffix}
    </Label>
  );
};

type LabelSize = "sm" | "md" | "lg";
export const fieldLabelSizing: Record<LabelSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-md",
};
