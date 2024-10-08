import { Label, Tooltip, TooltipProps, type LabelProps } from "flowbite-react";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { FieldLabelI18nBundle } from "./FieldLabel.i18n";

export type FieldLabelProps = LabelProps & {
  required?: boolean;
  sizing?: LabelSize;
  suffix?: ReactNode;
  tooltipProps?: Omit<TooltipProps, "children">;
};
export const FieldLabel: FC<FieldLabelProps> = ({
  required,
  children,
  sizing,
  suffix,
  tooltipProps,
  ...props
}) => {
  return (
    <Label
      {...props}
      className={twMerge(
        "flex items-center",
        sizing && fieldLabelSizing[sizing],
        props.className,
      )}
    >
      {tooltipProps ? (
        <Tooltip {...tooltipProps}>
          <Contents
            children={children}
            required={required}
            suffix={suffix}
            tooltipProps={tooltipProps}
          />
        </Tooltip>
      ) : (
        <Contents children={children} required={required} suffix={suffix} />
      )}
    </Label>
  );
};

type ContentsProps = Pick<
  FieldLabelProps,
  "children" | "required" | "suffix" | "tooltipProps"
>;

const Contents: FC<ContentsProps> = ({
  children,
  required,
  suffix,
  tooltipProps,
}) => {
  const { t } = useTranslation(FieldLabelI18nBundle.namespace);
  return (
    <>
      <span className="flex flex-row">
        <span
          className={twMerge(!!tooltipProps && "underline decoration-dotted")}
        >
          {children}
        </span>
        {required && (
          <span
            aria-hidden="true"
            title={t(FieldLabelI18nBundle.strings.required)}
            className="text-red-600 dark:text-red-400"
          >
            *
          </span>
        )}
      </span>
      {suffix}
    </>
  );
};

type LabelSize = "sm" | "md" | "lg";
export const fieldLabelSizing: Record<LabelSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-md",
};
