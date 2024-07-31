import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DataTable> = {
  component: DataTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    caption: "Sample values",
  },
  render: (args) => (
    <DataTable {...args} columns={colors}>
      {colors.map((_, x) => (
        <DataTable.Row key={x}>
          {colors.map((_, y) => (
            <DataTable.Cell key={y}>
              {x}, {y}
            </DataTable.Cell>
          ))}
        </DataTable.Row>
      ))}
      <DataTable.Caption>Caption!</DataTable.Caption>
    </DataTable>
  ),
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const colors = ["Red", "Green", "Blue"];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const Loading: Story = {
  args: { loading: true, loadingRows: colors.length },
};
