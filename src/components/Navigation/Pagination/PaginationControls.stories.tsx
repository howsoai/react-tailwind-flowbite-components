import type { Meta, StoryObj } from "@storybook/react";
import { PaginationControls } from "./PaginationControls";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof PaginationControls> = {
  component: PaginationControls,
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
    currentPage: 4,
    loading: false,
    pageSize: 5,
    totalPages: 11,
  },
};

export default meta;
type Story = StoryObj<typeof PaginationControls>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const OnePage: Story = {
  args: {
    count: 4,
    currentPage: 1,
    pageSize: 5,
    totalPages: 1,
  },
};

export const NoResults: Story = {
  args: {
    count: 0,
    currentPage: 1,
    pageSize: 5,
    totalPages: 0,
  },
};
