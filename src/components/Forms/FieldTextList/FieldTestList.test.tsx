import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FC, ReactNode } from "react";
import { UseFormProps, useForm, FormProvider } from "react-hook-form";
import { FieldTextList } from "./FieldTextList";

describe("FieldTextList", () => {
  it("should read its value from form default values by field name", async () => {
    const name = "test";
    const defaultValues = {
      [name]: [Math.random().toPrecision(3), Math.random().toPrecision(3)],
    };
    render(
      <Wrapper formProps={{ defaultValues }}>
        <FieldTextList label={name} name={name} />
      </Wrapper>,
    );

    expect(screen.getByLabelText(name)).toHaveValue(
      defaultValues[name].join(", "),
    );
  });
});

const Wrapper: FC<{ children: ReactNode; formProps?: UseFormProps }> = ({
  children,
  formProps,
}) => {
  const form = useForm(formProps);
  return <FormProvider {...form}>{children}</FormProvider>;
};
