import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "flowbite-react";
import { ConfigurationIcon, DeleteIcon } from "../../Icons";
import { ContextMenu } from "./ContextMenu";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ContextMenu> = {
  component: ContextMenu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  //   tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    isLoading: false,
    children: (
      <>
        <Dropdown.Item icon={ConfigurationIcon}>Configuration</Dropdown.Item>
        <Dropdown.Item icon={DeleteIcon}>Delete</Dropdown.Item>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
