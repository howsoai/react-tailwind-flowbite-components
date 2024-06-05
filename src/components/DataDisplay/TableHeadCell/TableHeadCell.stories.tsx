import type { Meta, StoryObj } from "@storybook/react";
import { TableHeadCell } from ".";
import { Table } from "flowbite-react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TableHeadCell> = {
  component: TableHeadCell,
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
    <Table>
      <Table.Head>
        <Table.HeadCell>Table.HeadCell</Table.HeadCell>
        <TableHeadCell {...args}>Table.HeadCell</TableHeadCell>
      </Table.Head>
    </Table>
  ),
};

export default meta;
type Story = StoryObj<typeof TableHeadCell>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const AsTD: Story = {
  args: {
    as: "td",
  },
};
