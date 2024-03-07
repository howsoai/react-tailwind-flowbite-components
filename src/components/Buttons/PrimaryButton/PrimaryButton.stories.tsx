import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
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
    <div className="flex gap-2">
      <PrimaryButton {...args} size={"xs"}>
        xs
      </PrimaryButton>
      <PrimaryButton {...args} size={"sm"}>
        sm
      </PrimaryButton>
      <PrimaryButton {...args} size={"md"}>
        md
      </PrimaryButton>
      <PrimaryButton {...args} size={"lg"}>
        lg
      </PrimaryButton>
      <PrimaryButton {...args} size={"xl"}>
        xl
      </PrimaryButton>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const States: Story = {
  args: {},
  render: (args) => (
    <div className="flex gap-2">
      <PrimaryButton {...args} disabled>
        Disabled
      </PrimaryButton>
      <PrimaryButton {...args} isProcessing>
        Processing
      </PrimaryButton>
    </div>
  ),
};

export const Colors: Story = {
  args: {},
  render: (args) => (
    <div className="flex gap-2">
      <PrimaryButton {...args} color="failure">
        Disabled
      </PrimaryButton>
      <PrimaryButton {...args} color="warning">
        Disabled
      </PrimaryButton>
      <PrimaryButton {...args} color="success">
        Processing
      </PrimaryButton>
    </div>
  ),
};
