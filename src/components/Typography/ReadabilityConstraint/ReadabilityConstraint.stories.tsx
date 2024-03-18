import type { Meta, StoryObj } from "@storybook/react";
import { ReadabilityConstraint } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ReadabilityConstraint> = {
  component: ReadabilityConstraint,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien faucibus et molestie. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Viverra ipsum nunc aliquet bibendum. Egestas dui id ornare arcu odio ut sem nulla. Enim lobortis scelerisque fermentum dui faucibus. Felis eget velit aliquet sagittis id consectetur. Morbi tristique senectus et netus et malesuada fames ac turpis. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Cursus in hac habitasse platea dictumst quisque sagittis. Massa eget egestas purus viverra accumsan in. Amet venenatis urna cursus eget. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. In vitae turpis massa sed elementum tempus egestas sed. At elementum eu facilisis sed odio morbi quis. Scelerisque fermentum dui faucibus in. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Ut placerat orci nulla pellentesque dignissim enim sit amet. Quisque id diam vel quam.",
  },
};

export default meta;
type Story = StoryObj<typeof ReadabilityConstraint>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};
