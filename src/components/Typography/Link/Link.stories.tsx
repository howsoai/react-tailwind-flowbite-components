import type { Meta, StoryObj } from "@storybook/react";
import { Link } from ".";
import { Paragraph } from "../Paragraph";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Link> = {
  component: Link,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    href: "https://www.howso.com/",
    children: <></>,
  },
  render: (args) => (
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur{" "}
      <Link {...args}>adipiscing elit</Link>, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.
    </Paragraph>
  ),
};

export default meta;
type Story = StoryObj<typeof Link>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const CustomClasses: Story = {
  args: {
    className: "font-black",
  },
};
