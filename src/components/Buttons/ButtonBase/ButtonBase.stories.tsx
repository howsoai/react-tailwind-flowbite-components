import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "flowbite-react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  component: Button,
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
    <div className="flex gap-2">
      <div>
        <Button {...args} size={"xs"}>
          xs
        </Button>
      </div>
      <div>
        <Button {...args} size={"sm"}>
          sm
        </Button>
      </div>
      <div>
        <Button {...args} size={"md"}>
          md
        </Button>
      </div>
      <div>
        <Button {...args} size={"lg"}>
          lg
        </Button>
      </div>
      <div>
        <Button {...args} size={"xl"}>
          xl
        </Button>
      </div>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const Colors: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-2">
      <p>Default</p>
      <section className="flex gap-2">
        <Button {...args} color="primary">
          Primary
        </Button>
        <Button {...args} color="secondary">
          Secondary
        </Button>
        <Button {...args} color="info">
          Info
        </Button>
        <Button {...args} color="failure">
          Failure
        </Button>
        <Button {...args} color="warning">
          Warning
        </Button>
        <Button {...args} color="success">
          Success
        </Button>
      </section>

      <p>Outlined</p>
      <section className="flex gap-2">
        <Button {...args} color="primary" outline>
          Primary
        </Button>
        <Button {...args} color="secondary" outline>
          Secondary
        </Button>
        <Button {...args} color="info" outline>
          Info
        </Button>
        <Button {...args} color="failure" outline>
          Failure
        </Button>
        <Button {...args} color="warning" outline>
          Warning
        </Button>
        <Button {...args} color="success" outline>
          Success
        </Button>
      </section>

      <p>Link</p>
      <section className="flex gap-2">
        <Button {...args} href="#" color="primary">
          Primary
        </Button>
        <Button {...args} href="#" color="secondary">
          Secondary
        </Button>
        <Button {...args} href="#" color="info">
          Info
        </Button>
        <Button {...args} href="#" color="failure">
          Failure
        </Button>
        <Button {...args} href="#" color="warning">
          Warning
        </Button>
        <Button {...args} href="#" color="success">
          Success
        </Button>
      </section>
    </div>
  ),
};
