import type { Meta, StoryObj } from "@storybook/react";
import { FC, ReactNode } from "react";
import { IconBaseProps } from "react-icons";
import {
  AdministrationIcon,
  ArrowCircleIcon,
  ChevronIcon,
  ConfigurationIcon,
  CopyIcon,
  DatabaseIcon,
  DatabricksIcon,
  DownloadIcon,
  ExpandCollapseIcon,
  FileIcon,
  FilesIcon,
  GitHubIcon,
  NewWindowIcon,
  PredictIcon,
  SaveIcon,
  SearchIcon,
  SnowflakeIcon,
  UpdateIcon,
  UploadIcon,
  WarningIcon,
} from ".";
import { DocumentationIcon } from "./DocumentationIcon";
import { UserIcon } from "./UserIcon";

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
  args: {},
  render: (args) => (
    <>
      <Section title="Action">
        <IconWithLabel
          label={"CopyIcon"}
          description="Default"
          Icon={<CopyIcon />}
        />
        <IconWithLabel
          label={"CopyIcon"}
          description="Copied"
          Icon={<CopyIcon copied />}
        />
        <IconWithLabel
          label="Documentation"
          Icon={<DocumentationIcon {...args} />}
        />
        <IconWithLabel label="DownloadIcon" Icon={<DownloadIcon {...args} />} />
        <IconWithLabel
          label={"ExpandCollapseIcon"}
          description="Collapsed"
          Icon={<ExpandCollapseIcon isExpanded={false} />}
        />
        <IconWithLabel
          label={"ExpandCollapseIcon"}
          description="Expanded"
          Icon={<ExpandCollapseIcon isExpanded={false} />}
        />
        <IconWithLabel label={"PredictIcon"} Icon={<PredictIcon />} />
        <IconWithLabel label={"SaveIcon"} Icon={<SaveIcon />} />
        <IconWithLabel label={"SearchIcon"} Icon={<SearchIcon />} />
        <IconWithLabel label={"UpdateIcon"} Icon={<UpdateIcon />} />
        <IconWithLabel label={"UploadIcon"} Icon={<UploadIcon />} />
      </Section>

      <Section title="Semantic">
        <IconWithLabel label={"Administration"} Icon={<AdministrationIcon />} />
        <IconWithLabel
          label={"ArrowCircle"}
          description="Up"
          Icon={<ArrowCircleIcon direction="up" />}
        />
        <IconWithLabel
          label={"ArrowCircle"}
          description="Right"
          Icon={<ArrowCircleIcon direction="right" />}
        />
        <IconWithLabel
          label={"ArrowCircle"}
          description="Down"
          Icon={<ArrowCircleIcon direction="down" />}
        />
        <IconWithLabel
          label={"ArrowCircle"}
          description="Left"
          Icon={<ArrowCircleIcon direction="left" />}
        />
        <IconWithLabel
          label={"Chevron"}
          description="Up"
          Icon={<ChevronIcon direction="up" />}
        />
        <IconWithLabel
          label={"ArrowCircle"}
          description="Right"
          Icon={<ChevronIcon direction="right" />}
        />
        <IconWithLabel
          label={"Chevron"}
          description="Down"
          Icon={<ChevronIcon direction="down" />}
        />
        <IconWithLabel
          label={"Chevron"}
          description="Left"
          Icon={<ChevronIcon direction="left" />}
        />
        <IconWithLabel label={"Configuration"} Icon={<ConfigurationIcon />} />
        <IconWithLabel label={"Database"} Icon={<DatabaseIcon />} />
        <IconWithLabel label={"File"} Icon={<FileIcon />} />
        <IconWithLabel label={"Files"} Icon={<FilesIcon />} />
        <IconWithLabel
          label="NewWindowIcon"
          Icon={<NewWindowIcon {...args} />}
        />
        <IconWithLabel label={"User"} Icon={<UserIcon />} />
        <IconWithLabel label={"Warning"} Icon={<WarningIcon />} />
      </Section>

      <Section title="Brands">
        <IconWithLabel label={"Databricks"} Icon={<DatabricksIcon />} />
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
