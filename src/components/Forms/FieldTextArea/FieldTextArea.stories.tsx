import type { Meta, StoryObj } from "@storybook/react";
import { getFormProviderDecorator } from "@/storybook";
import { FieldTextArea } from "./FieldTextArea";
import { UseFormRegister } from "react-hook-form";

const fieldName = "name";
const registerValues: Partial<
  ReturnType<UseFormRegister<{ [fieldName]: string }>>
> = {
  name: fieldName,
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FieldTextArea> = {
  component: FieldTextArea,
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
    placeholder: "Name",
    helperText: "Lorem ipsum dolor sit amet..",
  },
};

export default meta;
type Story = StoryObj<typeof FieldTextArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Filled: Story = {
  args: {
    value: `Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 - 27 November 1852) was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation.

    Ada Byron was the only legitimate child of poet Lord Byron and reformer Anne Isabella Milbanke.[2] All Lovelace's half-siblings, Lord Byron's other children, were born out of wedlock to other women.[3] Byron separated from his wife a month after Ada was born and left England forever. He died in Greece when Ada was eight. Her mother was anxious about her upbringing and promoted Ada's interest in mathematics and logic in an effort to prevent her from developing her father's perceived insanity. Despite this, Ada remained interested in him, naming her two sons Byron and Gordon. Upon her death, she was buried next to him at her request. Although often ill in her childhood, Ada pursued her studies assiduously. She married William King in 1835. King was made Earl of Lovelace in 1838, Ada thereby becoming Countess of Lovelace.`,
  },
};

export const Invalid: Story = {
  decorators: [
    getFormProviderDecorator({
      errors: {
        [fieldName]: { type: "validate", message: "Must be a unique name" },
      },
    }),
  ],
  args: {
    value: "Ada Lovelace",
  },
};
