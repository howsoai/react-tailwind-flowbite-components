import type { Meta, StoryObj } from "@storybook/react";
import { getFormProviderDecorator } from "@/storybook";
import { FieldStatic } from "./FieldStatic";
import { UseFormRegister } from "react-hook-form";

const fieldName = "name";
const registerValues: Partial<
  ReturnType<UseFormRegister<{ [fieldName]: string }>>
> = {
  name: fieldName,
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FieldStatic> = {
  component: FieldStatic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  decorators: [getFormProviderDecorator()],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    ...registerValues,
    label: "Name",
    helperText: "Lorem ipsum dolor sit amet..",
    value: "Static content",
  },
  render: (args) => (
    <div className="flex flex-row gap-3">
      <FieldStatic {...args} sizing={"sm"} />
      <FieldStatic {...args} />
      <FieldStatic {...args} sizing={"lg"} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof FieldStatic>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const LabelInline: Story = {
  args: {
    labelInline: true,
    labelProps: { className: "w-40" },
  },
};
