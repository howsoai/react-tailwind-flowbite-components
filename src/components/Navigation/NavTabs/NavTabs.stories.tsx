import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "flowbite-react";
import { NavTabs } from "./NavTabs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof NavTabs> = {
  component: NavTabs,
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
    <NavTabs {...args}>
      <NavTabs.Item to="" end>
        Tab A
      </NavTabs.Item>
      <NavTabs.Item to="validation" end>
        Tab B
      </NavTabs.Item>
    </NavTabs>
  ),
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};
