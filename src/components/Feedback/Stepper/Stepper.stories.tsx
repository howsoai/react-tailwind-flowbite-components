import type { Meta, StoryObj } from "@storybook/react";
import { FaQuestion } from "react-icons/fa";
import { GiTakeMyMoney, GiUnderwearShorts } from "react-icons/gi";
import { Stepper } from "./Stepper";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Stepper> = {
  component: Stepper,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    vertical: false,
    steps: 3,
  },
  render: (args) => (
    <Stepper {...args}>
      <Stepper.Item position={0}>
        <Stepper.Icon>
          <GiUnderwearShorts className="text-2xl" />
        </Stepper.Icon>
        <Stepper.Content>
          <h3>Steal underpants</h3>
          <p>Don't get caught!</p>
        </Stepper.Content>
      </Stepper.Item>

      <Stepper.Spacer />

      <Stepper.Item position={1}>
        <Stepper.Icon>
          <FaQuestion className="text-2xl" />
        </Stepper.Icon>
        <Stepper.Content>
          <h3>?</h3>
          <p>Still working on this.</p>
        </Stepper.Content>
      </Stepper.Item>

      <Stepper.Spacer />

      <Stepper.Item position={2}>
        <Stepper.Icon>
          <GiTakeMyMoney className="text-2xl" />
        </Stepper.Icon>
        <Stepper.Content>
          <h3>Profit</h3>
          <p>Then expand operations!</p>
        </Stepper.Content>
      </Stepper.Item>
    </Stepper>
  ),
};

export default meta;
type Story = StoryObj<typeof Stepper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
};
