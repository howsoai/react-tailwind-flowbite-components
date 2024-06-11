import type { Meta, StoryObj } from "@storybook/react";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { getFormProviderDecorator } from "@/storybook";

const fieldName = "name";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FieldErrorMessage> = {
  component: FieldErrorMessage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: { name: fieldName },
};

export default meta;
type Story = StoryObj<typeof FieldErrorMessage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const ErrorWithMessage: Story = {
  decorators: [
    getFormProviderDecorator({
      errors: {
        [fieldName]: { type: "required", message: "Must be a unique name" },
      },
    }),
  ],
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const ErrorWithoutMessageAndTypeWithTranslation: Story = {
  decorators: [
    getFormProviderDecorator({
      errors: {
        [fieldName]: { type: "required" },
      },
    }),
  ],
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const TypeWithoutTranslation: Story = {
  decorators: [
    getFormProviderDecorator({
      errors: {
        [fieldName]: {
          type: "custom",
          message: "Only green fruits are allowed",
        },
      },
    }),
  ],
  args: {},
};

export const NoError: Story = {
  decorators: [
    getFormProviderDecorator({
      errors: {},
    }),
  ],
  args: {},
};
