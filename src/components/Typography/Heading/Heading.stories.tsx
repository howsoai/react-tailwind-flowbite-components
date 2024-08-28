import type { Meta, StoryObj } from "@storybook/react";
import { H1, H2, H3, H4, H5, H6, Heading } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Heading> = {
  component: Heading,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    marginBottom: false,
    children: <>Lorem ipsum dolor sit amet</>,
  },
  render: (args) => (
    <>
      <H1 {...args} />
      <H2 {...args} />
      <H3 {...args} />
      <H4 {...args} />
      <H5 {...args} />
      <H6 {...args} />
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const MarginBottom: Story = {
  args: {
    marginBottom: true,
  },
};

export const CustomClasses: Story = {
  args: {
    className: "text-blue-600",
  },
};
