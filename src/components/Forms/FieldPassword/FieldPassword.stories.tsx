import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { UseFormRegister } from "react-hook-form";
import { getFormProviderDecorator } from "../../../storybook";
import { FieldPassword } from "./FieldPassword";

const fieldName = "name";
const registerValues: Partial<
  ReturnType<UseFormRegister<{ [fieldName]: string }>>
> = {
  name: fieldName,
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FieldPassword> = {
  component: FieldPassword,
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
    label: "Password",
    placeholder: "correct horse battery staple",
    helperText: "Lorem ipsum dolor sit amet..",
    onChange: fn(),
    onBlur: fn(),
  },
  render: (args) => (
    <div className="flex flex-row gap-3">
      <FieldPassword {...args} sizing={"sm"} />
      <FieldPassword {...args} />
      <FieldPassword {...args} sizing={"lg"} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof FieldPassword>;

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

export const NoHelperText: Story = {
  args: {
    helperText: undefined,
  },
};

export const Filled: Story = {
  args: {
    defaultValue: "Ada Lovelace",
  },
};

export const Invalid: Story = {
  decorators: [
    getFormProviderDecorator({
      errors: {
        [fieldName]: { type: "validate", message: "Must be a unique name" },
      },
    }),
  ],
  args: {
    defaultValue: "Ada Lovelace",
  },
};

export const LabelInline: Story = {
  decorators: Invalid.decorators,
  args: {
    labelInline: true,
    labelProps: { className: "w-40" },
    required: true,
  },
};
