import React from "react";
import type { Preview, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Flowbite, ThemeMode } from "flowbite-react";
import { standardFlowbiteTheme } from "../src/themes/index";
// CSS
// import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "./tailwind.css";

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
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: { defaultViewport: "responsive" },
  },
  decorators: [
    (Story: StoryFn, context) => {
      const mode: ThemeMode =
        context.globals.backgrounds?.value === dark.value ? "dark" : "light";

      // Flowbite likes to store your preference in local storage, not what we're doing here.
      localStorage.removeItem("flowbite-theme-mode");
      if (mode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return (
        <Flowbite theme={{ theme: standardFlowbiteTheme, mode: "light" }}>
          <Story />
        </Flowbite>
      );
    },
    (Story: StoryFn) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default preview;
