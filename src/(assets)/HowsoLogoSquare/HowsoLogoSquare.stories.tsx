import type { Meta, StoryObj } from "@storybook/react";
import { darkBackground, lightBackground } from "../../../.storybook/constants";
import { HowsoLogoSquare } from "./HowsoLogoSquare";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof HowsoLogoSquare> = {
  component: HowsoLogoSquare,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    className: "h-12",
  },
};

export default meta;
type Story = StoryObj<typeof HowsoLogoSquare>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {};

export const LightBackground: Story = {
  args: {
    background: "light",
  },
  globals: {
    backgrounds: { value: lightBackground.value },
  },
};

export const DarkBackground: Story = {
  args: {
    background: "dark",
  },
  globals: {
    backgrounds: { value: darkBackground.name },
  },
};
