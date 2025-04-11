import type { Meta, StoryObj } from "@storybook/react";
import { ExpandCollapseControl } from "./ExpandCollapseControl";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ExpandCollapseControl> = {
  component: ExpandCollapseControl,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    isExpanded: false,
    children: "Expand",
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="flex flex-row items-center gap-4">
        <p>Default</p>
        <ExpandCollapseControl {...args} />
        <ExpandCollapseControl {...args} children={null} />
      </div>
      <div className="flex flex-row items-center gap-4">
        <p>.ExpandUp</p>
        <ExpandCollapseControl.ExpandUp {...args} />
        <ExpandCollapseControl.ExpandUp {...args} children={null} />
      </div>
      <div className="flex flex-row items-center gap-4">
        <p>.ExpandRight</p>
        <ExpandCollapseControl.ExpandRight {...args} />
        <ExpandCollapseControl.ExpandRight {...args} children={null} />
      </div>
      <div className="flex flex-row items-center gap-4">
        <p>.ExpandDown</p>
        <ExpandCollapseControl.ExpandDown {...args} />
        <ExpandCollapseControl.ExpandDown {...args} children={null} />
      </div>
      <div className="flex flex-row items-center gap-4">
        <p>.ExpandLeft</p>
        <ExpandCollapseControl.ExpandLeft {...args} />
        <ExpandCollapseControl.ExpandLeft {...args} children={null} />
      </div>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof ExpandCollapseControl>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const Expanded: Story = {
  args: {
    isExpanded: true,
    children: "Collapse",
  },
};
