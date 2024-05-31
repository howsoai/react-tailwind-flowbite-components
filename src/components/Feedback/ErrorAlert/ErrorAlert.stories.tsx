import type { Meta, StoryObj } from "@storybook/react";
import { ErrorAlert } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ErrorAlert> = {
  component: ErrorAlert,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ErrorAlert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Message: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    message: "Something went wrong",
  },
};

export const ErrorStory: Story = {
  name: "Error",
  args: {
    error: new Error("Something went wrong"),
  },
};

export const NoParameters: Story = {
  args: {},
};
