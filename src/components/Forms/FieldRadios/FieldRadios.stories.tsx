import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { UseFormRegister } from "react-hook-form";
import { getFormProviderDecorator } from "../../../storybook";
import { FieldRadios } from "./FieldRadios";

const fieldName = "name";
const registerValues: Partial<
  ReturnType<UseFormRegister<{ [fieldName]: string }>>
> = {
  name: fieldName,
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FieldRadios> = {
  component: FieldRadios,
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
    helperText: "Lorem ipsum dolor sit amet..",
    label: "Name",
    options: [
      { value: "1", text: "One" },
      { value: "2" },
      { value: "3", text: <div className="font-bold">Three</div> },
    ],
    registerOptions: {
      onChange: fn(),
      onBlur: fn(),
    },
  },
  render: (args) => (
    <div className="space-y-10">
      <FieldRadios {...args} sizing="sm" />
      <FieldRadios {...args} />
      <FieldRadios {...args} sizing="lg" />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof FieldRadios>;

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

export const NoHelperRadios: Story = {
  args: {
    helperText: undefined,
  },
};

export const Filled: Story = {
  decorators: [
    getFormProviderDecorator({
      defaultValues: {
        [fieldName]: "2",
      },
    }),
  ],
  args: {},
};

export const Invalid: Story = {
  decorators: [
    getFormProviderDecorator({
      errors: {
        [fieldName]: { type: "validate", message: "A value must be selected" },
      },
    }),
  ],
  args: {},
};

export const LabelInline: Story = {
  decorators: Invalid.decorators,
  args: {
    labelInline: true,
    labelProps: { className: "w-40" },
    required: true,
  },
};
