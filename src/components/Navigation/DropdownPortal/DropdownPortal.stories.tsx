import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "flowbite-react";
import { PrimaryButton } from "../../Buttons";
import { ViewIcon } from "../../Icons";
import { DropdownPortal } from "./DropdownPortal";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DropdownPortal> = {
  component: DropdownPortal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    children: (
      <>
        <Dropdown.Item icon={ViewIcon}>A</Dropdown.Item>
        <Dropdown.Item icon={ViewIcon}>B</Dropdown.Item>
        <Dropdown.Item icon={ViewIcon}>C</Dropdown.Item>
        <Dropdown.Item icon={ViewIcon}>D</Dropdown.Item>
        <Dropdown.Item icon={ViewIcon}>F</Dropdown.Item>
      </>
    ),
    trigger: <PrimaryButton>Dropdown</PrimaryButton>,
  },
};

export default meta;
type Story = StoryObj<typeof DropdownPortal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const OverflowXAuto: Story = {
  args: {},
  render: (args) => (
    <div className="h-8 w-40 overflow-x-auto bg-orange-500">
      <DropdownPortal {...args} />
    </div>
  ),
};
