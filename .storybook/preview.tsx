// Imported here for storybook. These must be imported in your own project's index file
import type { Preview, StoryFn } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
// CSS
// import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "../src/tailwind.css";

const preview: Preview = {
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    // layout: "fullscreen", // TODO not having any effect..
    actions: { argTypesRegex: "^on.*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default preview;
