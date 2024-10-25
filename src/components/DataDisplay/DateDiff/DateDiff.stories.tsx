import type { Meta, StoryObj } from "@storybook/react";
import type { FC, ReactNode } from "react";
import { DateDiff, type DateDiffProps } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DateDiff> = {
  component: DateDiff,
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
type Story = StoryObj<typeof DateDiff>;

const RenderWithTimes: FC<DateDiffProps & { label: ReactNode }> = ({
  label,
  ...props
}) => (
  <div>
    <div className="text-lg font-bold">{label}</div>
    <div>Start: {String(props.start)}</div>
    <div className="mb-1">End: {String(props.end)}</div>
    <DateDiff {...props} />
  </div>
);

const Group: FC<{ heading: ReactNode; children: ReactNode }> = ({
  heading,
  children,
}) => (
  <div className="space-y-2">
    <h2 className="text-xl font-semibold">{heading}</h2>
    {children}
  </div>
);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
  render: (args) => (
    <div className="flex flex-row gap-4">
      <Group heading={"Plural"}>
        <RenderWithTimes
          {...args}
          label={"Milliseconds"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-10-24T21:55:44.350Z"}
        />
        <RenderWithTimes
          {...args}
          label={"Seconds"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-10-24T21:55:35.350Z"}
        />
        <RenderWithTimes
          {...args}
          label={"Minutes"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-10-24T21:43:35.350Z"}
        />
        <RenderWithTimes
          {...args}
          label={"Hours"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-10-24T19:43:35.350Z"}
        />
        <RenderWithTimes
          {...args}
          label={"Days"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-10-22T19:43:35.350Z"}
        />
        <RenderWithTimes
          {...args}
          label={"Months"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-08-22T19:43:35.350Z"}
        />
        <RenderWithTimes
          {...args}
          label={"Years"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2022-08-22T19:43:35.350Z"}
        />
      </Group>
      <Group heading={"Singular"}>
        <RenderWithTimes
          {...args}
          label={"Millisecond"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-10-24T21:55:44.849Z"}
        />
        <RenderWithTimes
          {...args}
          label={"Seconds"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-10-24T21:55:43.849Z"}
        />
        <RenderWithTimes
          {...args}
          label={"Minutes"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-10-24T21:54:43.849Z"}
        />
        <RenderWithTimes
          {...args}
          label={"Hours"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-10-24T20:54:43.849Z"}
        />
        <RenderWithTimes
          {...args}
          label={"Days"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-10-23T20:54:43.849Z"}
        />
        <RenderWithTimes
          {...args}
          label={"Months"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-09-23T20:54:43.849Z"}
        />
        <RenderWithTimes
          {...args}
          label={"Years"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2023-09-23T20:54:43.849Z"}
        />
      </Group>
      <Group heading={"Skipped units"}>
        <RenderWithTimes
          {...args}
          label={"Milliseconds and Minutes"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-10-24T21:53:44.350Z"}
        />
        <RenderWithTimes
          {...args}
          label={"Days and minutes"}
          end={"2024-10-24T21:55:44.850Z"}
          start={"2024-10-22T21:55:41.850Z"}
        />
      </Group>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const OrderMismatch: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    start: "2024-10-23T21:02:44.850Z",
    end: "2024-10-24T21:02:44.850Z",
  },
};

export const Invalid: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    start: "2024-10-cow",
    end: "2024-10-24T21:02:44.850Z",
  },
};
