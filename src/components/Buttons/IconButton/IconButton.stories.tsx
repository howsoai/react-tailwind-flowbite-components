import type { Meta, StoryObj } from "@storybook/react";
import { twMerge } from "tailwind-merge";
import { IconButton } from ".";
import { CopyIcon } from "../../Icons";
import { PrimaryButton } from "../PrimaryButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof IconButton> = {
  component: IconButton,
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
    <>
      {["light bg-white text-black", "dark bg-black text-white"].map(
        (className) => (
          <div className={twMerge("space-y-2 border p-2", className)}>
            <div className="flex gap-2">
              <PrimaryButton size="xs">XS</PrimaryButton>
              <IconButton {...args} size="xs">
                <CopyIcon />
              </IconButton>
              <IconButton {...args} disabled title="Disabled" size="xs">
                <CopyIcon />
              </IconButton>
              <IconButton {...args} isProcessing title="Processing" size="xs">
                <CopyIcon />
              </IconButton>
            </div>

            <div className="flex gap-2">
              <PrimaryButton size="sm">SM</PrimaryButton>
              <IconButton {...args} size="sm">
                <CopyIcon />
              </IconButton>
              <IconButton {...args} disabled title="Disabled" size="sm">
                <CopyIcon />
              </IconButton>
              <IconButton {...args} isProcessing title="Processing" size="sm">
                <CopyIcon />
              </IconButton>
            </div>

            <div className="flex gap-2">
              <PrimaryButton>MD</PrimaryButton>
              <IconButton {...args}>
                <CopyIcon size={"16px"} />
              </IconButton>
              <IconButton {...args} disabled title="Disabled">
                <CopyIcon />
              </IconButton>
              <IconButton {...args} isProcessing title="Processing">
                <CopyIcon />
              </IconButton>
            </div>

            <div className="flex gap-2">
              <PrimaryButton size="lg">LG</PrimaryButton>
              <IconButton {...args} size="lg">
                <CopyIcon />
              </IconButton>
              <IconButton {...args} disabled title="Disabled" size="lg">
                <CopyIcon />
              </IconButton>
              <IconButton {...args} isProcessing title="Processing" size="lg">
                <CopyIcon />
              </IconButton>
            </div>

            <div className="flex gap-2">
              <PrimaryButton size="xl">XL</PrimaryButton>
              <IconButton {...args} size="xl">
                <CopyIcon />
              </IconButton>
              <IconButton {...args} disabled title="Disabled" size="xl">
                <CopyIcon />
              </IconButton>
              <IconButton {...args} isProcessing title="Processing" size="xl">
                <CopyIcon />
              </IconButton>
            </div>
          </div>
        ),
      )}
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};
