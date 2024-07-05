import flowbite from "flowbite/plugin";
import { standardTailwindConfigThemeExtend } from "./src/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    flowbite.content(),
    "./src/**/*.{js,ts,jsx,tsx}",
    "./storybook/**/*.{jsx,tsx,html}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [flowbite({ charts: true })],
  theme: {
    extend: standardTailwindConfigThemeExtend,
  },
};
