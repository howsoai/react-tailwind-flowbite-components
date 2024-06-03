import type { Meta, StoryObj } from "@storybook/react";
import { FieldLabel } from "./FieldLabel";
import { Link } from "@/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FieldLabel> = {
  component: FieldLabel,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    children: "Name",
  },
};

export default meta;
type Story = StoryObj<typeof FieldLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Suffix: Story = {
  args: {
    suffix: (
      <Link className="ml-1" href={"https://playground.howso.com/"}>
        Playground
      </Link>
    ),
  },
};
