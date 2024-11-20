import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph, ReadabilityConstraint } from "../../Typography";
import { Paper } from "./Paper";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Paper> = {
  component: Paper,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Paper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
  render: (args) => (
    <ReadabilityConstraint>
      <Paper {...args}>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
          aspernatur veritatis magnam tempora aut, deleniti autem. Incidunt,
          ipsam explicabo illo alias eaque deserunt dicta excepturi deleniti,
          consequuntur consectetur voluptatum hic.
        </Paragraph>
      </Paper>
    </ReadabilityConstraint>
  ),
};
