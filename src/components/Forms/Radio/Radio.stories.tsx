import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Radio> = {
  component: Radio,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    onChange: fn(),
    onBlur: fn(),
  },
  render: (args) => (
    <div className="flex flex-row gap-6">
      <div className="flex items-center gap-2">
        <Radio {...args} checked /> Default
      </div>
      <div className="flex items-center gap-2">
        <Radio {...args} checked color="green" /> Green
      </div>
      <div className="flex items-center gap-2">
        <Radio {...args} checked color="red" /> Red
      </div>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};
