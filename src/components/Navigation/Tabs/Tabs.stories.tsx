import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tooltip } from "flowbite-react";
import {
  DatabaseIcon,
  DatabricksIcon,
  FilesIcon,
  UploadIcon,
} from "../../Icons";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Tabs> = {
  component: Tabs,
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
    <Tabs {...args}>
      <p>Upload content</p>
      <Tabs.Item active title="Upload" icon={UploadIcon}></Tabs.Item>
      <Tabs.Item title="Select sample" icon={FilesIcon}>
        <p>Select sample content</p>
      </Tabs.Item>
      <Tabs.Item
        disabled
        title={
          <Tooltip content="Use our open source packages to connect your own databases">
            Connect database
          </Tooltip>
        }
        icon={DatabaseIcon}
      />
      <Tabs.Item
        disabled
        title={
          <Tooltip content="Use our open source packages to run inside your own Databricks environment">
            Connect Databricks
          </Tooltip>
        }
        icon={DatabricksIcon}
      />
    </Tabs>
  ),
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};
