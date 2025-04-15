import type { Meta, StoryObj } from "@storybook/react";
import type { ElementType, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { SaveIcon } from "../../Icons";
import { Button, type ButtonProps } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  component: Button,
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
    <div className="flex gap-2">
      <div>
        <Button {...args} size={"xs"}>
          xs
        </Button>
      </div>
      <div>
        <Button {...args} size={"sm"}>
          sm
        </Button>
      </div>
      <div>
        <Button {...args} size={"md"}>
          md
        </Button>
      </div>
      <div>
        <Button {...args} size={"lg"}>
          lg
        </Button>
      </div>
      <div>
        <Button {...args} size={"xl"}>
          xl
        </Button>
      </div>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const Colors: Story = {
  args: {},
  render: (args) => (
    <>
      {["light bg-white text-black", "dark bg-black text-white"].map(
        (className) => (
          <div className={twMerge("space-y-2 border p-2", className)}>
            <p>Default</p>
            <section className="flex gap-2">
              <PrimaryButton {...args} />
              <SecondaryButton {...args} />
              <TertiaryButton {...args} />
              <InfoButton {...args} />
              <WarningButton {...args} />
              <SuccessButton {...args} />
              <FailureButton {...args} />
            </section>

            <p>Outlined</p>
            <section className="flex gap-2">
              <PrimaryButton {...args} outline />
              <SecondaryButton {...args} outline />
              <TertiaryButton {...args} outline />
              <InfoButton {...args} outline />
              <WarningButton {...args} outline />
              <SuccessButton {...args} outline />
              <FailureButton {...args} outline />
            </section>

            <p>Text</p>
            <section className="flex gap-2">
              <PrimaryButton {...args} text />
              <SecondaryButton {...args} text />
              <TertiaryButton {...args} text />
              <InfoButton {...args} text />
              <WarningButton {...args} text />
              <SuccessButton {...args} text />
              <FailureButton {...args} text />
            </section>

            <p>Link</p>
            <section className="flex gap-2">
              <PrimaryButton {...args} href="#" />
              <SecondaryButton {...args} href="#" />
              <TertiaryButton {...args} href="#" />
              <InfoButton {...args} href="#" />
              <WarningButton {...args} href="#" />
              <SuccessButton {...args} href="#" />
              <FailureButton {...args} href="#" />
            </section>

            <p>Router link</p>
            <section className="flex gap-2">
              <PrimaryButton {...args} as={RouterLink} to="#" />
              <SecondaryButton {...args} as={RouterLink} to="#" />
              <TertiaryButton {...args} as={RouterLink} to="#" />
              <InfoButton {...args} as={RouterLink} to="#" />
              <WarningButton {...args} as={RouterLink} to="#" />
              <SuccessButton {...args} as={RouterLink} to="#" />
              <FailureButton {...args} as={RouterLink} to="#" />
            </section>
          </div>
        ),
      )}
    </>
  ),
};

const PrimaryButton = <C extends ElementType = "button">(
  args: ButtonProps<C>,
): ReactNode => (
  <Button {...args} color="primary">
    <span className="flex flex-row items-center gap-1">
      <SaveIcon />
      <span>Primary</span>
    </span>
  </Button>
);

const SecondaryButton = <C extends ElementType = "button">(
  args: ButtonProps<C>,
): ReactNode => (
  <Button {...args} color="secondary">
    <span className="flex flex-row items-center gap-1">
      <SaveIcon />
      <span>Secondary</span>
    </span>
  </Button>
);

const TertiaryButton = <C extends ElementType = "button">(
  args: ButtonProps<C>,
): ReactNode => (
  <Button {...args} color="tertiary">
    <span className="flex flex-row items-center gap-1">
      <SaveIcon />
      <span>Tertiary</span>
    </span>
  </Button>
);

const InfoButton = <C extends ElementType = "button">(
  args: ButtonProps<C>,
): ReactNode => (
  <Button {...args} color="info">
    <span className="flex flex-row items-center gap-1">
      <SaveIcon />
      <span>Info</span>
    </span>
  </Button>
);

const WarningButton = <C extends ElementType = "button">(
  args: ButtonProps<C>,
): ReactNode => (
  <Button {...args} color="warning">
    <span className="flex flex-row items-center gap-1">
      <SaveIcon />
      <span>Warning</span>
    </span>
  </Button>
);

const SuccessButton = <C extends ElementType = "button">(
  args: ButtonProps<C>,
): ReactNode => (
  <Button {...args} color="success">
    <span className="flex flex-row items-center gap-1">
      <SaveIcon />
      <span>Success</span>
    </span>
  </Button>
);

const FailureButton = <C extends ElementType = "button">(
  args: ButtonProps<C>,
): ReactNode => (
  <Button {...args} color="failure">
    <span className="flex flex-row items-center gap-1">
      <SaveIcon />
      <span>Failure</span>
    </span>
  </Button>
);
