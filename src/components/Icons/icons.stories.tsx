import type { Meta, StoryObj } from "@storybook/react";
import { FC, ReactNode } from "react";
import { IconBaseProps } from "react-icons";
import {
  ConfigurationIcon,
  CopyIcon,
  DownloadIcon,
  ExpandCollapseIcon,
  FileIcon,
  FilesIcon,
  NewWindowIcon,
  SaveIcon,
  UpdateIcon,
  WarningIcon,
} from ".";
import { DocumentationIcon } from "./DocumentationIcon";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<IconBaseProps> = {
  title: "Components/Icons",
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
    <div className="flex gap-4">
      <IconWithLabel label={"ConfigurationIcon"} Icon={<ConfigurationIcon />} />
      <IconWithLabel label={"CopyIcon - Default"} Icon={<CopyIcon />} />
      <IconWithLabel label={"CopyIcon - Copied"} Icon={<CopyIcon copied />} />
      <IconWithLabel label={"FileIcon"} Icon={<FileIcon />} />
      <IconWithLabel label={"FilesIcon"} Icon={<FilesIcon />} />
      <IconWithLabel
        label="Documentation"
        Icon={<DocumentationIcon {...args} />}
      />
      <IconWithLabel label="DownloadIcon" Icon={<DownloadIcon {...args} />} />
      <IconWithLabel
        label={"ExpandCollapseIcon collapsed"}
        Icon={<ExpandCollapseIcon isExpanded={false} />}
      />
      <IconWithLabel
        label={"ExpandCollapseIcon expanded"}
        Icon={<ExpandCollapseIcon isExpanded={false} />}
      />
      <IconWithLabel label="NewWindowIcon" Icon={<NewWindowIcon {...args} />} />
      <IconWithLabel label={"SaveIcon"} Icon={<SaveIcon />} />
      <IconWithLabel label={"UpdateIcon"} Icon={<UpdateIcon />} />
      <IconWithLabel label={"WarningIcon"} Icon={<WarningIcon />} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<IconBaseProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

type IconWithLabelProps = { label: string; Icon: ReactNode };
const IconWithLabel: FC<IconWithLabelProps> = ({ label, Icon }) => (
  <div className="flex flex-col items-center justify-center">
    <div>{Icon}</div>
    <div>{label}</div>
  </div>
);
