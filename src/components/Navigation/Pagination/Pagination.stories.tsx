import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Pagination> = {
  component: Pagination,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    count: 52,
    pageSize: 5,
    totalPages: 11,
    currentPage: 4,
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const OnePage: Story = {
  args: {
    count: 4,
    pageSize: 5,
    totalPages: 1,
    currentPage: 1,
  },
};

export const NoResults: Story = {
  args: {
    count: 0,
    pageSize: 5,
    totalPages: 0,
    currentPage: 1,
  },
};
