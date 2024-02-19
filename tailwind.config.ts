import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      /**
       * The variables below are created in ./src/features/ui/fonts/index.tsx
       * and inserted in the body tag in ./src/app/layout.tsx.
       */
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        display: ["var(--font-display)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(200 78% 59% / <alpha-value>)",
          "50": "hsl(203 87% 97% / <alpha-value>)",
          "100": "hsl(205 81% 94% / <alpha-value>)",
          "200": "hsl(203 80% 86% / <alpha-value>)",
          "300": "hsl(201 80% 74% / <alpha-value>)",
          "400": "hsl(200 78% 59% / <alpha-value>)",
          "500": "hsl(201 74% 48% / <alpha-value>)",
          "600": "hsl(202 82% 39% / <alpha-value>)",
          "700": "hsl(203 80% 32% / <alpha-value>)",
          "800": "hsl(203 76% 27% / <alpha-value>)",
          "900": "hsl(203 67% 24% / <alpha-value>)",
          "950": "hsl(206 68% 16% / <alpha-value>)",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
export default config;
