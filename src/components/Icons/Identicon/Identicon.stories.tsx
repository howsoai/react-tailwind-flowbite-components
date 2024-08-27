import { Meta, StoryObj } from "@storybook/react/*";
import { Identicon } from "./Identicon";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Identicon> = {
  component: Identicon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  // tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    className: "h-20",
  },
  render: (args) => (
    <div className="flex flex-row gap-4">
      <Identicon {...args} />
      <Identicon {...args} id="f8d7b8fb-8125-4f4c-9465-055fa6279172" />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Identicon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Loading: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: { loading: true },
};
