import type { Meta, StoryObj } from "@storybook/react";
import { DateLong } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DateLong> = {
  component: DateLong,
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
type Story = StoryObj<typeof DateLong>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    value: "2024-10-24T21:02:44.850Z",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Falsy: Story = {
  args: {
    value: undefined,
  },
};

export const Invalid: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    value: "2024-10-cow",
  },
};
