import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { NetPromoterForm } from "./NetPromoterForm";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof NetPromoterForm> = {
  component: NetPromoterForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  //   tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    error: undefined,
    setError: fn(),
    onSubmit: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof NetPromoterForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
};

export const WithMessage: Story = {
  args: {
    showMessage: true,
  },
};

export const WithValues: Story = {
  args: {
    showMessage: true,
    defaultValues: {
      score: 8,
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  },
};

export const ErrorStory: Story = {
  name: "Error",
  args: {
    ...WithValues.args,
    error: new Error("Story features an error."),
  },
};
