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
  args: {},
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const colors = ["Red", "Green", "Blue"];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    columns: colors,
    caption: "Sample values",
  },
  render: (args) => (
    <DataTable {...args}>
      {colors.map((_, x) => (
        <DataTable.Row key={x}>
          {colors.map((_, y) => (
            <DataTable.Cell key={y}>
              {x}, {y}
            </DataTable.Cell>
          ))}
        </DataTable.Row>
      ))}
    </DataTable>
  ),
};

/** Feature attributes data frame using split orientation */
const featureAttributes = {
  columns: [
    ["type", ""],
    ["decimal_places", ""],
    ["bounds", "observed_max"],
    ["bounds", "observed_min"],
    ["bounds", "max"],
    ["bounds", "allow_null"],
    ["bounds", "min"],
    ["data_type", ""],
    ["original_type", "size"],
    ["original_type", "data_type"],
  ],
  index: [
    "petal_length",
    "class",
    "sepal_width",
    "sepal_length",
    "petal_width",
  ],
  data: [
    ["continuous", 1.0, 6.9, 1.0, 10.7, true, 0.0, "number", 8.0, "numeric"],
    ["nominal", null, null, null, null, true, null, null, null, "string"],
    ["continuous", 1.0, 4.4, 2.0, 6.0, true, 0.4, "number", 8.0, "numeric"],
    ["continuous", 1.0, 7.9, 4.3, 10.2, true, 2.0, "number", 8.0, "numeric"],
    ["continuous", 1.0, 2.5, 0.1, 4.1, true, 0.0, "number", 8.0, "numeric"],
  ],
  stickyColumns: [0],
};
export const FeatureAttributes: Story = {
  args: {
    columns: featureAttributes.columns,
    caption: "Feature attributes",
    stickyColumns: featureAttributes.stickyColumns,
  },
  render: (args) => (
    <DataTable {...args}>
      {featureAttributes.data.map((row, x) => (
        <DataTable.Row key={x}>
          {row.map((value, y) => (
            <DataTable.Cell
              key={y}
              sticky={featureAttributes.stickyColumns.includes(y)}
            >
              {value}
            </DataTable.Cell>
          ))}
        </DataTable.Row>
      ))}
    </DataTable>
  ),
};

export const Loading: Story = {
  args: { loading: true, loadingRows: colors.length },
};
