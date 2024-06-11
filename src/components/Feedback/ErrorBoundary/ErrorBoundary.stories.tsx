import type { Meta, StoryObj } from "@storybook/react";
import { ErrorBoundary } from ".";
import { FC } from "react";

const ThrowError: FC = () => {
  throw new Error("Something went wrong in a child component");
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ErrorBoundary> = {
  component: ErrorBoundary,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {},
  render: (args) => (
    <ErrorBoundary {...args}>
      <ThrowError />
    </ErrorBoundary>
  ),
};

export default meta;
type Story = StoryObj<typeof ErrorBoundary>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};
