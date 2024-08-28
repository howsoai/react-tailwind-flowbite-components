import { Paragraph } from "@/components/Typography";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FileDropZone, FileDropZoneProps } from "./FileDropZone";

// A typical usage would look something like:
//
//   const fileRef = useRef<HTMLInputElement>(null);
//   const onDrop: FileDropZoneProps["onDrop"] = async (event) => {
//     if (!fileRef.current) {
//       throw new Error("fileRef.current is undefined");
//     }
//     fileRef.current.files = event.dataTransfer.files;
//     fileRef.current.dispatchEvent(new Event("change", { bubbles: true }));
//   };
//   const onFileChange: InputHTMLAttributes<HTMLInputElement>["onChange"] = async (event) => {
//     reset();

//     if (!event.currentTarget) {
//       throw new Error("fileRef.current is undefined");
//     }
//     if (!event.currentTarget.files) {
//       return;
//     }
//
//     const files = [...event.currentTarget.files];
//     try {
//       validateFiles(files);
//       setFiles(file);
//     } catch (reason) {
//       reset();
//       setError(reason instanceof Error ? reason : new Error(`${reason}`));
//     }
//   };
//
// <FileDropZone onDrop={onDrop} className="mb-4">
//   <FileDropZone.Content
//     maxSize={maxSize}
//     accept={accept}
//     selectedFiles={file ? [file] : undefined}
//     htmlFor={fileRef.current?.id}
//   />
//   <input ref={fileRef} id={"file"} onChange={onFileChange} />
// </FileDropZone>

const accept = "image/*, .pdf";

const colors: FileDropZoneProps["color"][] = [
  "secondary",
  "info",
  "success",
  "warning",
  "failure",
];

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
    onDrop: fn(),
  },
  render: (args) => (
    <div className="flex flex-row gap-4 *:max-w-60">
      {colors.map((color) => (
        <FileDropZone {...args} color={color}>
          <FileDropZone.Content
            color={color}
            multiple={true}
            maxSize={5e7}
            accept={accept}
            htmlFor={color}
          />
          <input type="file" id={color} accept={accept} className="hidden" />
        </FileDropZone>
      ))}
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
  render: (args) => (
    <div className="flex flex-row gap-4 *:max-w-60">
      {colors.map((color) => (
        <FileDropZone {...args} color={color}>
          <FileDropZone.Content
            color={color}
            multiple={true}
            maxSize={5e7}
            accept={accept}
            htmlFor={color}
            selectedFiles={
              [
                {
                  name: "Lorem ipsum dollar sit amen.png",
                  size: 900,
                },
              ] as File[]
            }
          />
          <input type="file" id={color} accept={accept} className="hidden" />
        </FileDropZone>
      ))}
    </div>
  ),
};

export const SelectedFiles: Story = {
  render: (args) => (
    <div className="flex flex-row gap-4 *:max-w-60">
      {colors.map((color) => (
        <FileDropZone {...args} color={color}>
          <FileDropZone.Content
            color={color}
            multiple={true}
            maxSize={5e7}
            accept={accept}
            htmlFor={color}
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
          <input type="file" id={color} accept={accept} className="hidden" />
        </FileDropZone>
      ))}
    </div>
  ),
};

export const ComponentOverrides: Story = {
  render: (args) => (
    <div className="space-y-4">
      <section>
        <h2>Defaults</h2>
        <div className="flex flex-row gap-4 *:max-w-60">
          {colors.map((color) => (
            <FileDropZone {...args} color={color}>
              <FileDropZone.Content
                color={color}
                Accepts={<Paragraph marginBottom>Accepts</Paragraph>}
                Icon={<Paragraph marginBottom>Icon</Paragraph>}
                Instructions={<Paragraph marginBottom>Instructions</Paragraph>}
                MaxSize={<Paragraph marginBottom>MaxSize</Paragraph>}
              />
              <input
                type="file"
                id={color}
                accept={accept}
                className="hidden"
              />
            </FileDropZone>
          ))}
        </div>
      </section>
      <section>
        <h2>With files</h2>
        <div className="flex flex-row gap-4 *:max-w-60">
          {colors.map((color) => (
            <FileDropZone {...args} color={color}>
              <FileDropZone.Content
                color={color}
                Accepts={<Paragraph marginBottom>Accepts</Paragraph>}
                Icon={<Paragraph marginBottom>Icon</Paragraph>}
                Instructions={<Paragraph marginBottom>Instructions</Paragraph>}
                MaxSize={<Paragraph marginBottom>MaxSize</Paragraph>}
                selectedFiles={
                  [
                    {
                      name: "Lorem ipsum dollar sit amen.png",
                      size: 900,
                    },
                  ] as File[]
                }
              />
              <input
                type="file"
                id={color}
                accept={accept}
                className="hidden"
              />
            </FileDropZone>
          ))}
        </div>
      </section>
    </div>
  ),
};
