import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FileDropZone } from "./FileDropZone";

// const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
//   event.preventDefault();
//   setSelectedFiles(undefined);
//   validateFiles(event.dataTransfer.files);
//   setFiles(event.dataTransfer.files);
// };

// const validateFiles = (files: FileList) => {
//   const errors: string[] = [];
//   [...files].forEach((file) => {
//     if (props.accept && !props.accept.split(";").includes(file.type)) {
//       // Field state invalid
//     }
//     if (props.maxSize && file.size > props.maxSize) {
//       // Field state invalid
//     }
//   });

//   if (errors.length > 0) {
//     throw new Error(errors.join(", "));
//   }
// };

// const setFiles = (files: FileList) => {
//   if (!internalRef.current) {
//     throw new Error("internalRef.current is undefined");
//   }

//   internalRef.current.files = files;
//   internalRef.current.dispatchEvent(new Event("change", { bubbles: true }));
//   setSelectedFiles([...files]);
// };

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FileDropZone> = {
  component: FileDropZone,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    children: (
      <FileDropZone.Content
        multiple={true}
        maxSize={5e7}
        accept={"image/*, .pdf"}
        // selectedFiles={selectedFiles}
      />
    ),
    onDrop: fn(),
  },
  render: (args) => (
    <div className="flex flex-row gap-4 *:max-w-60">
      <FileDropZone {...args} color="gray" />
      <FileDropZone {...args} color="info" />
      <FileDropZone {...args} color="success" />
      <FileDropZone {...args} color="warning" />
      <FileDropZone {...args} color="failure" />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof FileDropZone>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const IsDragging: Story = {
  args: {
    isDragging: true,
  },
};

export const IsHovered: Story = {
  args: {
    isDragging: true,
    isHovered: true,
  },
};

export const SelectedFile: Story = {
  args: {
    children: (
      <FileDropZone.Content
        multiple={true}
        maxSize={1050}
        accept={"image/png"}
        selectedFiles={
          [
            {
              name: "Lorem ipsum dollar sit amen.png",
              size: 900,
            },
          ] as File[]
        }
      />
    ),
  },
};

export const SelectedFiles: Story = {
  args: {
    children: (
      <FileDropZone.Content
        multiple={true}
        maxSize={1050}
        accept={"image/png"}
        selectedFiles={
          [
            {
              name: "Lorem ipsum dollar sit amen.png",
              size: 900,
            },
            {
              name: "Quasi labore corrupti porro molestiae",
              size: 500,
            },
          ] as File[]
        }
      />
    ),
  },
};
