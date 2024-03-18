import type { Meta, StoryObj } from "@storybook/react";
import { GraphicalError } from ".";
import { Paragraph } from "../../Typography";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof GraphicalError> = {
  component: GraphicalError,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: ["unrecoverable", "not-found", "server"],
    },
  },
  args: {
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    className: "",
    heading: "Lorem ipsum dolor sit amet",
    type: "unrecoverable",
  },
};

export default meta;
type Story = StoryObj<typeof GraphicalError>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const TwoSentenceDescription: Story = {
  args: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien faucibus et molestie.",
  },
};

export const MultipleParagraphDescription: Story = {
  args: {
    description: (
      <>
        <Paragraph marginBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Consectetur lorem donec massa sapien faucibus et molestie. Vitae proin
          sagittis nisl rhoncus mattis rhoncus urna. Viverra ipsum nunc aliquet
          bibendum. Egestas dui id ornare arcu odio ut sem nulla. Enim lobortis
          scelerisque fermentum dui faucibus. Felis eget velit aliquet sagittis
          id consectetur. Morbi tristique senectus et netus et malesuada fames
          ac turpis. Amet risus nullam eget felis eget nunc lobortis mattis
          aliquam. Cursus in hac habitasse platea dictumst quisque sagittis.
          Massa eget egestas purus viverra accumsan in. Amet venenatis urna
          cursus eget. Viverra maecenas accumsan lacus vel facilisis volutpat
          est velit. In vitae turpis massa sed elementum tempus egestas sed. At
          elementum eu facilisis sed odio morbi quis. Scelerisque fermentum dui
          faucibus in. Pretium aenean pharetra magna ac placerat vestibulum
          lectus mauris. Ut placerat orci nulla pellentesque dignissim enim sit
          amet. Quisque id diam vel quam.
        </Paragraph>
        <Paragraph>
          Condimentum id venenatis a condimentum vitae. Non arcu risus quis
          varius quam quisque id diam. Tellus rutrum tellus pellentesque eu
          tincidunt tortor aliquam. Nec tincidunt praesent semper feugiat.
          Viverra nam libero justo laoreet. Amet tellus cras adipiscing enim eu
          turpis egestas. Vehicula ipsum a arcu cursus vitae congue mauris
          rhoncus aenean. Facilisis mauris sit amet massa vitae tortor.
          Tincidunt ornare massa eget egestas purus viverra accumsan in. Eu mi
          bibendum neque egestas congue quisque. Sagittis eu volutpat odio
          facilisis mauris sit. Vulputate odio ut enim blandit volutpat maecenas
          volutpat blandit aliquam. Bibendum ut tristique et egestas quis ipsum.
          Ante metus dictum at tempor commodo ullamcorper. Aliquam nulla
          facilisi cras fermentum odio. Et magnis dis parturient montes nascetur
          ridiculus mus mauris vitae. Sed nisi lacus sed viverra tellus.
        </Paragraph>
      </>
    ),
  },
};
