import type { Meta, StoryObj } from "@storybook/react";
import { getFormProviderDecorator } from "@/storybook";
import { FieldTextAreaList } from "./FieldTextAreaList";
import { UseFormRegister } from "react-hook-form";

const fieldName = "names";
const registerValues: Partial<
  ReturnType<UseFormRegister<{ [fieldName]: string[] | undefined | null }>>
> = {
  name: fieldName,
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FieldTextAreaList> = {
  component: FieldTextAreaList,
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
    label: "Names",
    placeholder: "Names",
    helperText: "Lorem, ipsum, dolor sit",
  },
};

export default meta;
type Story = StoryObj<typeof FieldTextAreaList>;

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

export const Filled: Story = {
  args: {
    defaultValue: ["Ada Lovelace", "Grace Hopper"],
  },
};

export const Invalid: Story = {
  decorators: [
    getFormProviderDecorator({
      errors: {
        [fieldName]: { type: "validate", message: "All values must be unique" },
      },
    }),
  ],
  args: {
    defaultValue: ["Ada Lovelace", "Ada Lovelace"],
  },
};

export const Numbers: Story = {
  args: {
    defaultValue: [2, 3, 5, 7],
    valueAsNumber: true,
  },
};