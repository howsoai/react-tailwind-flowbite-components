import twContainerQueries from "@tailwindcss/container-queries";
import flowbite from "flowbite-react/tailwind";
import { standardTailwindConfigThemeExtend } from "./src/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    flowbite.content(),
    "./src/**/*.{js,ts,jsx,tsx}",
    "./storybook/**/*.{jsx,tsx,html}",
  ],
  plugins: [flowbite.plugin({ charts: true }), twContainerQueries],
  theme: {
    extend: standardTailwindConfigThemeExtend,
  },
};
