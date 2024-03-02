import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [flowbite({ charts: true })],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--brand-primary) / <alpha-value>)",
        "brand-purple": "hsl(var(--brand-purple) / <alpha-value>)",
        "brand-blue": "hsl(var(--brand-blue) / <alpha-value>)",
        "brand-charcoal": "hsl(var(--brand-charcoal) / <alpha-value>)",
      },
      animation: {
        heartbeat: "heartbeat 1.5s infinite",
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(.95)" },
        },
      },
    },
  },
};
