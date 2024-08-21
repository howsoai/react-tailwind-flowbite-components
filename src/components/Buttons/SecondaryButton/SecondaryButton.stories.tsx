import type { Meta, StoryObj } from "@storybook/react";
import { SecondaryButton } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SecondaryButton> = {
  component: SecondaryButton,
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
      <div>
        <SecondaryButton {...args}>Default</SecondaryButton>
      </div>
      <div>
        <SecondaryButton {...args} outline={false}>
          Filled
        </SecondaryButton>
      </div>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const States: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-2">
      <div className="flex gap-2">
        <div>
          <SecondaryButton {...args} disabled>
            Disabled
          </SecondaryButton>
        </div>
        <div>
          <SecondaryButton {...args} isProcessing>
            Processing
          </SecondaryButton>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <SecondaryButton {...args} disabled outline={false}>
            Disabled
          </SecondaryButton>
        </div>
        <div>
          <SecondaryButton {...args} isProcessing outline={false}>
            Processing
          </SecondaryButton>
        </div>
      </div>
    </div>
  ),
};
