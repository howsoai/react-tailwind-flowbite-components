import { forwardRef, ReactNode } from "react";
import {
  type TextInputProps as FlowbiteFieldTextProps,
  HelperText,
  getTheme,
} from "flowbite-react";
import { FieldBase, type FieldBaseProps } from "../FieldBase";
import { twMerge } from "tailwind-merge";

export type FieldStaticProps = Omit<FieldBaseProps, "required"> & {
  value: ReactNode;
} & Pick<FlowbiteFieldTextProps, "addon" | "sizing" | "helperText" | "color">;

export const FieldStatic = forwardRef<HTMLDivElement, FieldStaticProps>(
  (
    {
      addon,
      color,
      containerProps,
      helperText,
      label,
      labelInline,
      labelProps,
      sizing = "md",
      value,
    },
    ref,
  ) => {
    const theme = getTheme();

    return (
      <FieldBase
        containerProps={containerProps}
        label={label}
        labelInline={labelInline}
        labelProps={labelProps}
        sizing={sizing}
        field={
          <div className={twMerge(theme.textInput.base)}>
            <div className={twMerge(theme.textInput.field.base)}>
              <div
                className={twMerge(
                  theme.textInput.field.input.base,
                  color && theme.textInput.field.input.colors[color],
                  sizing && theme.textInput.field.input.sizes[sizing],
                  addon
                    ? theme.textInput.field.input.withAddon.on
                    : theme.textInput.field.input.withAddon.off,
                )}
                ref={ref}
              >
                {value}
              </div>
            </div>
            {addon && <div className={twMerge(theme.textInput.addon)}></div>}
          </div>
        }
        extras={
          helperText && <HelperText color={"gray"} children={helperText} />
        }
      />
    );
  },
);
