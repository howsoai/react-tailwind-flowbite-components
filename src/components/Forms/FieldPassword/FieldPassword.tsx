import { TextInput as FlowbiteFieldText, HelperText } from "flowbite-react";
import {
  FC,
  type InputHTMLAttributes,
  forwardRef,
  useCallback,
  useId,
  useState,
} from "react";
import { useFormState } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { VisibilityIcon } from "../../Icons";
import { FieldBase } from "../FieldBase";
import { FieldErrorMessage } from "../FieldErrorMessage";
import { FieldTextProps } from "../FieldText";
import { FieldPasswordI18nBundle as i18n } from "./FieldPassword.i18n";

export type FieldPasswordProps = Omit<FieldTextProps, "options" | "type">;

export const FieldPasswordComponent = forwardRef<
  HTMLInputElement,
  FieldPasswordProps
>(
  (
    {
      containerProps,
      helperText,
      label,
      labelInline,
      labelProps,
      name = "",
      ...props
    },
    ref,
  ) => {
    const { errors } = useFormState();
    const internalId = useId();
    const id = props.id || internalId;

    const error = errors[name];
    const hasError = !!error;

    const additions:
      | InputHTMLAttributes<HTMLInputElement>
      | { [key: string]: string | undefined } = {
      "aria-invalid": hasError,
      color: props.color || hasError ? "failure" : undefined,
      name,
      id,
    };
    const hasExtras = hasError || !!helperText;
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const toggleIsPasswordShown = useCallback(() => {
      setIsPasswordShown((previous) => !previous);
    }, [setIsPasswordShown]);

    return (
      <FieldBase
        containerProps={containerProps}
        label={label}
        labelInline={labelInline}
        labelProps={labelProps}
        id={id}
        required={props.required}
        sizing={props.sizing}
        field={
          <>
            <FlowbiteFieldText
              {...props}
              {...additions}
              type={isPasswordShown ? "text" : "password"}
              addon={
                props.addon || (
                  <FieldPasswordToggleAddon
                    isVisible={isPasswordShown}
                    onToggle={toggleIsPasswordShown}
                  />
                )
              }
              ref={ref}
            />
          </>
        }
        extras={
          hasExtras && (
            <>
              <FieldErrorMessage name={name} />
              {helperText && (
                <HelperText color={"gray"} children={helperText} />
              )}
            </>
          )
        }
      />
    );
  },
);

export type FieldPasswordToggleProps = {
  isVisible: boolean;
  onToggle: () => void;
};
export const FieldPasswordToggleAddon: FC<FieldPasswordToggleProps> = ({
  isVisible,
  onToggle,
}) => {
  const { t } = useTranslation(i18n.namespace);
  const title = isVisible
    ? i18n.strings.visibility.hide
    : i18n.strings.visibility.show;
  return (
    <button type="button" onClick={onToggle} className="m-[-12px] p-[12px]">
      {<VisibilityIcon isVisible={!isVisible} title={t(title)} />}
    </button>
  );
};

export const FieldPassword = Object.assign(FieldPasswordComponent, {
  ToggleAddon: FieldPasswordToggleAddon,
});
