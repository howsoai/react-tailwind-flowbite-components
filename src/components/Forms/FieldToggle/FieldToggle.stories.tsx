import type { Meta, StoryObj } from "@storybook/react";
import { getFormProviderDecorator } from "../../../storybook";
import { FieldToggle } from "./FieldToggle";
import { UseFormRegister } from "react-hook-form";
import { fn } from "@storybook/test";

const fieldName = "enable_cookies";
const registerValues: Partial<
  ReturnType<UseFormRegister<{ [fieldName]: boolean }>>
> = {
  name: fieldName,
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FieldToggle> = {
  component: FieldToggle,
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
    label: "Enable cookies",
    helperText: "Lorem ipsum dolor sit amet..",
    onChange: fn(),
    onBlur: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof FieldToggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const On: Story = {
  args: {
    checked: true,
  },
};
