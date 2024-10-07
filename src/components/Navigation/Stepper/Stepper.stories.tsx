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
    className: "w-[90vw]",
    vertical: false,
    steps: 3,
  },
  render: (args) => (
    <Stepper {...args}>
      <Stepper.Item position={0}>
        <Stepper.Icon>
          <GiUnderwearShorts />
        </Stepper.Icon>
        <Stepper.Content>
          <Stepper.Content.Heading>Steal underpants</Stepper.Content.Heading>
          <Stepper.Content.Description>
            Don't get caught!
          </Stepper.Content.Description>
        </Stepper.Content>
      </Stepper.Item>

      <Stepper.Spacer />

      <Stepper.Item position={1}>
        <Stepper.Icon>
          <FaQuestion />
        </Stepper.Icon>
        <Stepper.Content>
          <Stepper.Content.Heading>?</Stepper.Content.Heading>
          <Stepper.Content.Description>
            Still working on this.
          </Stepper.Content.Description>
        </Stepper.Content>
      </Stepper.Item>

      <Stepper.Spacer />

      <Stepper.Item position={2}>
        <Stepper.Icon>
          <GiTakeMyMoney />
        </Stepper.Icon>
        <Stepper.Content>
          <Stepper.Content.Heading>Profit</Stepper.Content.Heading>
          <Stepper.Content.Description>
            Then expand operations!
          </Stepper.Content.Description>
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
