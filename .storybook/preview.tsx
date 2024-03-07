// Imported here for storybook. These must be imported in your own project's index file
import type { Preview, StoryFn } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
// CSS
// import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "../src/tailwind.css";
import { standardFlowbiteTheme } from "../src/themes/index";
import { Flowbite } from "flowbite-react";

const light = {
  name: "Light",
  value: "#fff",
};

const dark = {
  name: "Dark",
  value: "#000",
};

const preview: Preview = {
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    // layout: "fullscreen", // TODO not having any effect..
    backgrounds: {
      // Load them by hand, or make a nice loop if you wish
      values: [light, dark],
      // Ensure a default is set, so you avoid type errors reading from undefined!
      default: light.name,
    },
    actions: { argTypesRegex: "^on.*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story: StoryFn, context) => (
      <Flowbite
        theme={{
          theme: standardFlowbiteTheme,
          mode:
            context.globals.backgrounds?.value === dark.value
              ? "dark"
              : "light",
        }}
      >
        <Story />
      </Flowbite>
    ),
    (Story: StoryFn) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default preview;
