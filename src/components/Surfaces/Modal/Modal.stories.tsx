import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "flowbite-react";
import { Paragraph } from "../../Typography";

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
      <div className="flex h-full w-full flex-wrap gap-6 text-3xl">
        {new Array(100).fill(0).map((_, index) => (
          <div key={index}>{index}</div>
        ))}
      </div>
      <Modal {...args} show>
        <Modal.Header>
          <div className="flex flex-row flex-nowrap items-baseline justify-between gap-4">
            <div className="truncate">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </div>
            <div className="block truncate text-sm">
              Nulla similique impedit natus nesciunt repellendus quaerat
              exercitationem
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Paragraph marginBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            similique impedit natus nesciunt repellendus quaerat exercitationem
            incidunt dolorum neque sit? Mollitia molestias totam nam nostrum
            magnam veniam ipsam aspernatur quas.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            similique impedit natus nesciunt repellendus quaerat exercitationem
            incidunt dolorum neque sit? Mollitia molestias totam nam nostrum
            magnam veniam ipsam aspernatur quas.
          </Paragraph>
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
