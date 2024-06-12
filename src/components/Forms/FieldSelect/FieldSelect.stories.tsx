import type { Meta, StoryObj } from "@storybook/react";
import { getFormProviderDecorator } from "@/storybook";
import { FieldSelect } from "./FieldSelect";
import { UseFormRegister } from "react-hook-form";

const fieldName = "number";
const registerValues: Partial<
  ReturnType<UseFormRegister<{ [fieldName]: string }>>
> = {
  name: fieldName,
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FieldSelect> = {
  component: FieldSelect,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  decorators: [getFormProviderDecorator()],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    ...registerValues,
    label: "Number",
    helperText: "Lorem ipsum dolor sit amet..",
    children: (
      <>
        <option value="">Select</option>
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof FieldSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const LabelInline: Story = {
  args: {
    labelInline: true,
    labelProps: { className: "w-40" },
    required: true,
  },
};

export const Filled: Story = {
  args: {
    value: "one",
  },
};

export const Invalid: Story = {
  decorators: [
    getFormProviderDecorator({
      errors: {
        [fieldName]: { type: "min", message: "Must greater than 20" },
      },
    }),
  ],
  args: {
    value: "one",
  },
};
