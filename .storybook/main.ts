import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  // staticDirs: ["../public"], //👈 Configures the static asset folder in Storybook
  features: {
    viewportStoryGlobals: true,
    backgroundsStoryGlobals: true,
  },

  refs: {
    // flowbite: {
    //   title: "Flowbite",
    //   url: "https://storybook.flowbite-react.com/",
    //   expanded: false, // Optional, true by default
    // },
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
