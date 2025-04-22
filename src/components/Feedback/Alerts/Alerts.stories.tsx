import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertProps } from "flowbite-react";
import { FC } from "react";
import { Link } from "../../Typography";

type ContentProps = { color: AlertProps["color"] };
const Content: FC<ContentProps> = ({ color }) => {
  return (
    <>
      {color}: Lorem ipsum dolor,{" "}
      <Link href="#">sit amet consectetur adipisicing elit.</Link>
    </>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Alert> = {
  component: Alert,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {},
  render: ({ children, ...args }) => (
    <div className="space-y-2">
      <Alert {...args} color={"info"} children={<Content color={"info"} />} />
      <Alert
        {...args}
        color={"warning"}
        children={<Content color={"warning"} />}
      />
      <Alert
        {...args}
        color={"failure"}
        children={<Content color={"failure"} />}
      />
      <Alert
        {...args}
        color={"success"}
        children={<Content color={"success"} />}
      />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Message: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};
