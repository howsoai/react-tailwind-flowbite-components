import type { Meta, StoryObj } from "@storybook/react";
import { LocaleNumber } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof LocaleNumber> = {
  component: LocaleNumber,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    loading: false,
    value: 300_452,
  },
};

export default meta;
type Story = StoryObj<typeof LocaleNumber>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    value: 300_452,
  },
  render: () => (
    <div className="space-y-2">
      <div>
        <LocaleNumber value={300_452} />
      </div>
      <div>
        <LocaleNumber value={0.00000000000123} />
      </div>
      <div>
        <LocaleNumber value={300_452.00000000000123} />
      </div>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const NullOrUndefined: Story = {
  args: {
    value: undefined,
  },
};
