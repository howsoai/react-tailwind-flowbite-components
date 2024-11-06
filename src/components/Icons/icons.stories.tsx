import type { Meta, StoryObj } from "@storybook/react";
import { FC, ReactNode } from "react";
import { IconBaseProps } from "react-icons";
import {
  AdministrationIcon,
  ArrowCircleIcon,
  CancelIcon,
  ChevronIcon,
  ConfigurationIcon,
  ConnectionIcon,
  ContextMenuIcon,
  CopyIcon,
  CreateIcon,
  DatabaseIcon,
  DatabricksIcon,
  DeleteIcon,
  DocumentationIcon,
  DownloadIcon,
  EditIcon,
  ExpandCollapseIcon,
  FileIcon,
  FilesIcon,
  GitHubIcon,
  NewWindowIcon,
  PredictIcon,
  SaveIcon,
  SearchIcon,
  SnowflakeIcon,
  StopIcon,
  UpdateIcon,
  UploadIcon,
  UserIcon,
  ViewIcon,
  WarningIcon,
} from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<IconBaseProps> = {
  title: "Components/Icons",
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  // tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    className: "",
  },
  render: (args) => (
    <>
      <Section title="Action">
        <IconWithLabel label={"Cancel"} Icon={<CancelIcon {...args} />} />
        <IconWithLabel
          label={"Copy"}
          description="Default"
          Icon={<CopyIcon {...args} />}
        />
        <IconWithLabel
          label={"Copy"}
          description="Copied"
          Icon={<CopyIcon copied {...args} />}
        />
        <IconWithLabel label={"Create"} Icon={<CreateIcon {...args} />} />
        <IconWithLabel label="Delete" Icon={<DeleteIcon {...args} />} />
        <IconWithLabel
          label="Documentation"
          Icon={<DocumentationIcon {...args} />}
        />
        <IconWithLabel label="Download" Icon={<DownloadIcon {...args} />} />
        <IconWithLabel label="EditIcon" Icon={<EditIcon {...args} />} />
        <IconWithLabel
          label={"ExpandCollapse"}
          description="Collapsed"
          Icon={<ExpandCollapseIcon isExpanded={false} {...args} />}
        />
        <IconWithLabel
          label={"ExpandCollapse"}
          description="Expanded"
          Icon={<ExpandCollapseIcon isExpanded={false} {...args} />}
        />
        <IconWithLabel label={"Predict"} Icon={<PredictIcon {...args} />} />
        <IconWithLabel label={"Save"} Icon={<SaveIcon {...args} />} />
        <IconWithLabel label={"Search"} Icon={<SearchIcon {...args} />} />
        <IconWithLabel label={"Stop"} Icon={<StopIcon {...args} />} />
        <IconWithLabel label={"Update"} Icon={<UpdateIcon {...args} />} />
        <IconWithLabel label={"Upload"} Icon={<UploadIcon {...args} />} />
        <IconWithLabel label={"View"} Icon={<ViewIcon {...args} />} />
      </Section>

      <Section title="Semantic">
        <IconWithLabel
          label={"Administration"}
          Icon={<AdministrationIcon {...args} />}
        />
        <IconWithLabel
          label={"ArrowCircle"}
          description="Up"
          Icon={<ArrowCircleIcon {...args} direction="up" />}
        />
        <IconWithLabel
          label={"ArrowCircle"}
          description="Right"
          Icon={<ArrowCircleIcon {...args} direction="right" />}
        />
        <IconWithLabel
          label={"ArrowCircle"}
          description="Down"
          Icon={<ArrowCircleIcon {...args} direction="down" />}
        />
        <IconWithLabel
          label={"ArrowCircle"}
          description="Left"
          Icon={<ArrowCircleIcon {...args} direction="left" />}
        />
        <IconWithLabel
          label={"Chevron"}
          description="Up"
          Icon={<ChevronIcon {...args} direction="up" />}
        />
        <IconWithLabel
          label={"ArrowCircle"}
          description="Right"
          Icon={<ChevronIcon {...args} direction="right" />}
        />
        <IconWithLabel
          label={"Chevron"}
          description="Down"
          Icon={<ChevronIcon {...args} direction="down" />}
        />
        <IconWithLabel
          label={"Chevron"}
          description="Left"
          Icon={<ChevronIcon {...args} direction="left" />}
        />
        <IconWithLabel
          label={"Configuration"}
          Icon={<ConfigurationIcon {...args} />}
        />
        <IconWithLabel
          label={"Connection"}
          Icon={<ConnectionIcon {...args} status="online" />}
          description="Online"
        />
        <IconWithLabel
          label={"Connection"}
          Icon={<ConnectionIcon {...args} status="offline" />}
          description="Offline"
        />
        <IconWithLabel
          label={"ContextMenu"}
          Icon={<ContextMenuIcon {...args} />}
        />
        <IconWithLabel label={"Database"} Icon={<DatabaseIcon {...args} />} />
        <IconWithLabel label={"File"} Icon={<FileIcon {...args} />} />
        <IconWithLabel label={"Files"} Icon={<FilesIcon {...args} />} />
        <IconWithLabel
          label="NewWindowIcon"
          Icon={<NewWindowIcon {...args} />}
        />
        <IconWithLabel label={"User"} Icon={<UserIcon {...args} />} />
        <IconWithLabel label={"Warning"} Icon={<WarningIcon {...args} />} />
      </Section>

      <Section title="Brands">
        <IconWithLabel
          label={"Databricks"}
          Icon={<DatabricksIcon {...args} />}
        />
        <IconWithLabel label="GitHub" Icon={<GitHubIcon {...args} />} />
        <IconWithLabel label="Snowflake" Icon={<SnowflakeIcon {...args} />} />
      </Section>
    </>
  ),
};

type SectionProps = {
  title: ReactNode;
  children: ReactNode;
};
const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="my-3">
      <header>
        <h2 className="text-lg font-semibold">{title}</h2>
      </header>
      <div className="flex flex-wrap items-start gap-4">{children}</div>
    </section>
  );
};

type IconWithLabelProps = {
  description?: string;
  label: string;
  Icon: ReactNode;
};
const IconWithLabel: FC<IconWithLabelProps> = ({
  description,
  label,
  Icon,
}) => (
  <div className="flex flex-col items-center justify-center">
    <div>{Icon}</div>
    <div>{label}</div>
    {description && <div className="text-xs opacity-65">{description}</div>}
  </div>
);

export default meta;
type Story = StoryObj<IconBaseProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};
