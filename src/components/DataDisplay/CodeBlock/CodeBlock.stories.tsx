import type { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from ".";
import { storybookUser } from "../../../storybook";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CodeBlock> = {
  component: CodeBlock,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    children: JSON.stringify(storybookUser, undefined, 2),
    mimeType: "application/json",
    fileName: "user.json",
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};
