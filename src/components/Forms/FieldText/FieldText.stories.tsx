import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { UseFormRegister } from "react-hook-form";
import { getFormProviderDecorator } from "../../../storybook";
import { FieldText } from "./FieldText";

const fieldName = "name";
const registerValues: Partial<
  ReturnType<UseFormRegister<{ [fieldName]: string }>>
> = {
  name: fieldName,
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FieldText> = {
  component: FieldText,
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
    label: "Name",
    placeholder: "Name",
    helperText: "Lorem ipsum dolor sit amet..",
    onChange: fn(),
    onBlur: fn(),
  },
  render: (args) => (
    <div className="flex flex-row gap-3">
      <FieldText {...args} sizing={"sm"} />
      <FieldText {...args} />
      <FieldText {...args} sizing={"lg"} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof FieldText>;

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
