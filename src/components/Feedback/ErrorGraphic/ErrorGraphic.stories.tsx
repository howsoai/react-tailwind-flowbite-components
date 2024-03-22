import type { Meta, StoryObj } from "@storybook/react";
import { ErrorGraphic } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ErrorGraphic> = {
  component: ErrorGraphic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: ["unrecoverable", "not-found", "server"],
    },
  },
  args: {
    type: "unrecoverable",
  },
};

export default meta;
type Story = StoryObj<typeof ErrorGraphic>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Unrecoverable: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const UnrecoverableSmallMobile: Story = {
  parameters: { viewport: { defaultViewport: "mobile1" } },
};

export const UnrecoverableHeight200: Story = {
  render: (args) => (
    <div className="h-[200px]">
      <ErrorGraphic {...args} />
    </div>
  ),
};

export const NotFound: Story = {
  args: { type: "not-found" },
};

export const NotFoundSmallMobile: Story = {
  parameters: { viewport: { defaultViewport: "mobile1" } },
  args: { type: "not-found" },
};

export const NotFoundHeight200: Story = {
  args: { type: "not-found" },
  render: (args) => (
    <div className="h-[200px]">
      <ErrorGraphic {...args} />
    </div>
  ),
};

export const Server: Story = {
  args: { type: "server" },
};

export const ServerSmallMobile: Story = {
  parameters: { viewport: { defaultViewport: "mobile1" } },
  args: { type: "server" },
};

export const ServerHeight200: Story = {
  args: { type: "server" },
  render: (args) => (
    <div className="h-[200px]">
      <ErrorGraphic {...args} />
    </div>
  ),
};
