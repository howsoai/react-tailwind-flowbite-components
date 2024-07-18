import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "flowbite-react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Modal> = {
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  // tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  render: (args) => (
    <>
      <div className="w-full h-full text-3xl flex gap-6 flex-wrap">
        {new Array(100).fill(0).map((_, index) => (
          <div key={index}>{index}</div>
        ))}
      </div>
      <Modal {...args} show>
        <Modal.Body>
          <p>Sample content</p>
        </Modal.Body>
      </Modal>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};
