import type { Meta, StoryObj } from "@storybook/react";
import {
  CreatedAtLabel,
  CreatedByLabel,
  DurationLabel,
  EndedAtLabel,
  EndedByLabel,
  IdLabel,
  NameLabel,
  PropertyLabelProps,
  StartedAtLabel,
  StartedByLabel,
  StatusLabel,
  UpdatedAtLabel,
  UpdatedByLabel,
  UptimeLabel,
} from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<PropertyLabelProps> = {
  title: "Components/DataDisplay/PropertyLabels",
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  // tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    className: "",
  },
};

export default meta;
type Story = StoryObj<PropertyLabelProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
  render: (args) => (
    <div className="flex flex-col gap-1">
      <CreatedAtLabel {...args} />
      <CreatedByLabel {...args} />
      <DurationLabel {...args} />
      <EndedAtLabel {...args} />
      <EndedByLabel {...args} />
      <IdLabel {...args} />
      <NameLabel {...args} />
      <StartedAtLabel {...args} />
      <StartedByLabel {...args} />
      <StatusLabel {...args} />
      <UpdatedAtLabel {...args} />
      <UpdatedByLabel {...args} />
      <UptimeLabel {...args} />
    </div>
  ),
};
