import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FC, ReactNode } from "react";
import { FormProvider, UseFormProps, useForm } from "react-hook-form";
import { FieldTextAreaList } from "./FieldTextAreaList";

describe("FieldTextAreaList", () => {
  it("should read its value from form default values by field name", async () => {
    const name = "test";
    const defaultValues = {
      [name]: [Math.random().toPrecision(3), Math.random().toPrecision(3)],
    };
    render(
      <Wrapper formProps={{ defaultValues }}>
        <FieldTextAreaList label={name} name={name} />
      </Wrapper>,
    );

    expect(screen.getByLabelText(name)).toHaveValue(
      defaultValues[name].join("\n"),
    );
  });

  it("should accept a string of characters, including new lines and spaces as input, trimming on blur", async () => {
    const user = userEvent.setup();
    const name = "test";
    const defaultValues = { [name]: ["John", "Jacob"] };
    render(
      <Wrapper formProps={{ defaultValues }}>
        <FieldTextAreaList label={name} name={name} />
      </Wrapper>,
    );

    const input = await screen.findByLabelText<HTMLTextAreaElement>(name);
    expect(input).toHaveValue([...defaultValues[name]].join("\n"));
    const addition = "Jingleheimer Schmidt";
    await user.type(input, "\n" + addition + "   ", { skipClick: false });
    fireEvent.blur(input);
    expect(input).toHaveValue([...defaultValues[name], addition].join("\n"));
  });
});

const Wrapper: FC<{ children: ReactNode; formProps?: UseFormProps }> = ({
  children,
  formProps,
}) => {
  const form = useForm(formProps);
  return <FormProvider {...form}>{children}</FormProvider>;
};
