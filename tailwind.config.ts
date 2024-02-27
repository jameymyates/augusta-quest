import { spacing, borderRadius, fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        "te-primary": "0 0 0 1px rgb(59, 113, 202)",
        1: "0 0 2px 0 rgba(0,0,0,.07),0 1px 1px 0 rgba(0,0,0,.04)",
        "1-strong": "0 0 2px 0 rgba(0,0,0,.16),0 1px 1px 0 rgba(0,0,0,.1)",
        2: "0 0 3px 0 rgba(0,0,0,.07),0 2px 2px 0 rgba(0,0,0,.04)",
        "2-strong": "0 0 3px 0 rgba(0,0,0,.16),0 2px 2px 0 rgba(0,0,0,.1)",
        3: "0 2px 6px -1px rgba(0,0,0,.07),0 6px 18px -1px rgba(0,0,0,.04)",
        "3-strong":
          "0 2px 6px -1px rgba(0,0,0,.16),0 6px 18px -1px rgba(0,0,0,.1)",
        4: "0 2px 15px -3px rgba(0,0,0,.07),0 10px 20px -2px rgba(0,0,0,.04)",
        "4-strong":
          "0 2px 15px -3px rgba(0,0,0,.16),0 10px 20px -2px rgba(0,0,0,.1)",
        5: "0 2px 25px -5px rgba(0,0,0,.07),0 25px 21px -5px rgba(0,0,0,.04)",
        "5-strong":
          " 0 2px 25px -5px rgba(0,0,0,.16),0 25px 21px -5px rgba(0,0,0,.1)",
        "twe-inner": "inset 0 2px 4px 0 #0000000d",
      },

      colors: {
        /* Alabaster #f7f7f8 */
        white: "hsl(240 7% 97% / <alpha-value>)",

        /* Woodsmoke #18181a */
        black: "hsl(240 4% 10% / <alpha-value>)",

        primary: {
          /* Solitude #e2f1fc */
          lightest: "hsl(205 81% 94% / <alpha-value>)",

          /* Sail #bfe2f8 */
          lighter: "hsl(203 80% 86% / <alpha-value>)",

          /* Cornflower #87ccf2 */
          light: "hsl(201 80% 74% / <alpha-value>)",

          /* Picton Blue #45b1e8 */
          DEFAULT: "hsl(200 78% 59% / <alpha-value>)",

          /* Curious Blue #2098d7 */
          dark: "hsl(201 74% 48% / <alpha-value>)",

          /* Lochmara #127ab7 */
          darker: "hsl(202 82% 39% / <alpha-value>)",

          /* Bahama Blue #106194 */
          darkest: "hsl(203 80% 32% / <alpha-value>)",
        },

        secondary: {
          /* Picton Blue #48b2e8 */
          lightest: "hsl(200 78% 60% / <alpha-value>)",

          /* Curious Blue #2098d7 */
          lighter: "hsl(201 74% 48% / <alpha-value>)",

          /* Lochmara #127ab7 */
          light: "hsl(202 82% 39% / <alpha-value>)",

          /* Bahama Blue #106194 */
          DEFAULT: "hsl(203 80% 32% / <alpha-value>)",

          /* Chathams Blue #11537b */
          dark: "hsl(203 76% 27% / <alpha-value>)",

          /* Astronaut Blue #144566 */
          darker: "hsl(204 67% 24% / <alpha-value>)",

          /* Blue Whale #0d2c44 */
          darkest: "hsl(206 68% 16% / <alpha-value>)",
        },

        accent: {
          /* Karry #fbe8d9 */
          lightest: "hsl(26 81% 92% / <alpha-value>)",

          /* Apricot Peach #f6ceb2 */
          lighter: "hsl(25 79% 83% / <alpha-value>)",

          /* Tacao #f0ad81 */
          light: "hsl(24 79% 72% / <alpha-value>)",

          /* Crusta #e87b45 */
          DEFAULT: "hsl(20 78% 59% / <alpha-value>)",

          /* Red Damask #e4612b */
          dark: "hsl(18 77% 53% / <alpha-value>)",

          /* Grenadier #d54a21 */
          darker: "hsl(14 73% 48% / <alpha-value>)",

          /* Thunderbird #b1361d */
          darkest: "hsl(10 72% 40% / <alpha-value>)",
        },

        success: {
          /* Conifer #a2e635 */
          lightest: "hsl(86 78% 55% / <alpha-value>)",

          /* Atlantis #83cc16 */
          lighter: "hsl(86 81% 44% / <alpha-value>)",

          /* Christi #64a30d */
          light: "hsl(86 85% 35% / <alpha-value>)",

          /* Bilbao #4c7b0f */
          DEFAULT: "hsl(86 78% 27% / <alpha-value>)",

          /* Dell #3f6212 */
          dark: "hsl(86 69% 23% / <alpha-value>)",

          /* Green House #365314 */
          darker: "hsl(86 61% 20% / <alpha-value>)",

          /* Deep Forest Green #1a2e05 */
          darkest: "hsl(86 80% 10% / <alpha-value>)",
        },

        danger: {
          /* Carnation #f87171 */
          lightest: "hsl(0 91% 71% / <alpha-value>)",

          /* Coral Red #ef4444 */
          lighter: "hsl(0 84% 60% / <alpha-value>)",

          /* Persian Red #dc2626 */
          light: "hsl(0 72% 51% / <alpha-value>)",

          /* Monza #ba1c1c */
          DEFAULT: "hsl(0 74% 42% / <alpha-value>)",

          /* Tamarillo #991b1b */
          dark: "hsl(0 70% 35% / <alpha-value>)",

          /* Falu Red #7f1d1d */
          darker: "hsl(0 63% 31% / <alpha-value>)",

          /* Bulgarian Rose #450a0a */
          darkest: "hsl(0 75% 15% / <alpha-value>)",
        },

        warning: {
          /* Sweet Corn #fef08a */
          lightest: "hsl(46 98% 77% / <alpha-value>)",

          /* Energy Yellow #fddf47 */
          lighter: "hsl(45 98% 64% / <alpha-value>)",

          /* Supernova #facb15 */
          light: "hsl(45 96% 53% / <alpha-value>)",

          /* Tulip Tree #e7b008 */
          DEFAULT: "hsl(45 93% 47% / <alpha-value>)",

          /* Geebung #ca8904 */
          dark: "hsl(45 96% 40% / <alpha-value>)",

          /* Reno Sand #a16107 */
          darker: "hsl(46 92% 33% / <alpha-value>)",

          /* Bull Shot #854d0e */
          darkest: "hsl(45 81% 29% / <alpha-value>)",
        },

        info: {
          /* Gallery #efeff0 */
          lightest: "hsl(231 5% 74% / <alpha-value>)",

          /* Mercury #e1e2e4 */
          lighter: "hsl(231 5% 74% / <alpha-value>)",

          /* Iron #cecfd3 */
          light: "hsl(231 5% 74% / <alpha-value>)",

          /* French Gray #b9bac0 */
          DEFAULT: "hsl(231 5% 74% / <alpha-value>)",

          /* Aluminium #a6a6ae */
          dark: "hsl(231 5% 74% / <alpha-value>)",

          /* Mountain Mist #91919a */
          darker: "hsl(231 5% 74% / <alpha-value>)",

          /* Jumbo #7d7d85 */
          darkest: "hsl(231 5% 74% / <alpha-value>)",
        },

        neutral: {
          /* Alabaster #f7f7f8 */
          50: "hsl(240 7% 97% / <alpha-value>)",

          /* Athens Gray #eeeef0 */
          100: "hsl(240 6% 94% / <alpha-value>)",

          /* Alto #dadadd */
          200: "hsl(240 4% 86% / <alpha-value>)",

          /* French Gray #b9bac0 */
          300: "hsl(231 5% 74% / <alpha-value>)",

          /* Mountain Mist #93949d */
          400: "hsl(234 5% 60% / <alpha-value>)",

          /* Jumbo #767781 */
          500: "hsl(235 4% 48% / <alpha-value>)",

          /* Shuttle Gray #606169 */
          600: "hsl(233 4% 39% / <alpha-value>)",

          /* Abbey #4e4e56 */
          700: "hsl(240 5% 32% / <alpha-value>)",

          /* Gravel #434349 */
          800: "hsl(240 4% 27% / <alpha-value>)",

          /* Tuatara #3b3c3f */
          900: "hsl(225 3% 24% / <alpha-value>)",

          /* Woodsmoke #18181a */
          950: "hsl(240 4% 10% / <alpha-value>)",
        },
      },

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

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-out-down": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(0, 100%, 0)",
          },
        },
        "fade-out-left": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(-100%, 0, 0)",
          },
        },
        "fade-out-right": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(100%, 0, 0)",
          },
        },
        "fade-out-up": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
        },
        "slide-in-down": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-left": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-right": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-up": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-out-down": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(0, 100%, 0)",
          },
        },
        "slide-out-left": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(-100%, 0, 0)",
          },
        },
        "slide-out-right": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(100%, 0, 0)",
          },
        },
        "slide-out-up": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(0, -100%, 0)",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(0, 100%, 0)",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(-100%, 0, 0)",
          },
        },
        "slide-right": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(100%, 0, 0)",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(0, -100%, 0)",
          },
        },
        "zoom-in": {
          "0%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "50%": {
            opacity: "1",
          },
        },
        "zoom-out": {
          "0%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "100%": {
            opacity: "0",
          },
        },
        tada: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
        "spinner-grow": {
          "0%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "none",
            opacity: "1",
          },
        },
        "placeholder-wave": {
          "100%": { maskPosition: "-200% 0%" },
        },
        "show-up-clock": {
          "0%": {
            opacity: "0",
            transform: "scale(0.7)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        progress: {
          "0%": { transform: "translateX(-45%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "drop-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
            animationTimingFunction: "cubic-bezier(0.34, 1.61, 0.7, 1)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "drop-out": {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
            animationTimingFunction: "cubic-bezier(0.34, 1.61, 0.7, 1)",
          },
          "100%": { opacity: "0", transform: "scale(0)" },
        },
        "fly-in": {
          "0%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": { transform: "scale3d(1.1, 1.1, 1.1)" },
          "40%": { transform: "scale3d(0.9, 0.9, 0.9)" },
          "60%": { opacity: "1", transform: "scale3d(1.03, 1.03, 1.03)" },
          "80%": { transform: "scale3d(0.97, 0.97, 0.97)" },
          "100%": { opacity: "1", transform: "scale3d(1, 1, 1)" },
        },
        "fly-in-up": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 1500px, 0)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": { opacity: "1", transform: "translate3d(0, -20px, 0)" },
          "75%": { transform: "translate3d(0, 10px, 0)" },
          "90%": { transform: "translate3d(0, -5px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        "fly-in-down": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -1500px, 0)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": { opacity: "1", transform: "translate3d(0, 25px, 0)" },
          "75%": { transform: "translate3d(0, -10px, 0)" },
          "90%": { transform: "translate3d(0, 5px, 0)" },
          "100%": { transform: "none" },
        },
        "fly-in-left": {
          "0%": {
            opacity: "0",
            transform: "translate3d(1500px, 0, 0)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": { opacity: "1", transform: "translate3d(-25px, 0, 0)" },
          "75%": { transform: "translate3d(10px, 0, 0)" },
          "90%": { transform: "translate3d(-5px, 0, 0)" },
          "100%": { transform: "none" },
        },
        "fly-in-right": {
          "0%": {
            opacity: "0",
            transform: "translate3d(-1500px, 0, 0)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": { opacity: "1", transform: "translate3d(25px, 0, 0)" },
          "75%": { transform: "translate3d(-10px, 0, 0)" },
          "90%": { transform: "translate3d(5px, 0, 0)" },
          "100%": { transform: "none" },
        },
        "fly-out": {
          "0%": {
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            transform: "scale3d(0.9, 0.9, 0.9)",
          },
          "50%, 55%": {
            opacity: "1",
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
        },
        "fly-out-up": {
          "0%": {
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            transform: "translate3d(0, 10px, 0)",
          },
          "40%, 45%": {
            opacity: "1",
            transform: "translate3d(0, -20px, 0)",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(0, 2000px, 0)",
          },
        },
        "fly-out-down": {
          "0%": {
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            transform: "translate3d(0, -10px, 0)",
          },
          "40%, 45%": {
            opacity: "1",
            transform: "translate3d(0, 20px, 0)",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(0, -2000px, 0)",
          },
        },
        "fly-out-left": {
          "0%": {
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            opacity: "1",
            transform: "translate3d(-20px, 0, 0)",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(2000px, 0, 0)",
          },
        },
        "fly-out-right": {
          "0%": {
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            opacity: "1",
            transform: "translate3d(20px, 0, 0)",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(-2000px, 0, 0)",
          },
        },
        "browse-in": {
          "0%": { transform: "scale(0.8) translateZ(0px)", zIndex: "-1" },
          "10%": {
            transform: "scale(0.8) translateZ(0px)",
            zIndex: "-1",
            opacity: "0.7",
          },
          "80%": {
            transform: "scale(1.05) translateZ(0px)",
            zIndex: "999",
            opacity: "1",
          },
          "100%": { transform: "scale(1) translateZ(0px)", zIndex: "999" },
        },
        "browse-out": {
          "0%": {
            transform: "translateX(0%) rotateY(0deg) rotateX(0deg)",
            zIndex: "999",
          },
          "50%": {
            transform:
              "translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",
            zIndex: "-1",
          },
          "80%": { opacity: "1" },
          "100%": {
            zIndex: "-1",
            opacity: "0",
            transform:
              "translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)",
          },
        },
        "browse-out-left": {
          "0%": {
            transform: "translateX(0%) rotateY(0deg) rotateX(0deg)",
            zIndex: "999",
          },
          "50%": {
            transform:
              "translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",
            zIndex: "-1",
          },
          "80%": { opacity: "1" },
          "100%": {
            zIndex: "-1",
            opacity: "0",
            transform:
              "translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)",
          },
        },
        "browse-out-right": {
          "0%": {
            transform: "translateX(0%) rotateY(0deg) rotateX(0deg)",
            zIndex: "999",
          },
          "50%": {
            transform:
              "translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",
            zIndex: "1",
          },
          "80%": { opacity: "1" },
          "100%": {
            zIndex: "1",
            opacity: "0",
            transform:
              "translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)",
          },
        },
        jiggle: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(1.25, 0.75, 1)" },
          "40%": { transform: "scale3d(0.75, 1.25, 1)" },
          "50%": { transform: "scale3d(1.15, 0.85, 1)" },
          "65%": { transform: "scale3d(0.95, 1.05, 1)" },
          "75%": { transform: "scale3d(1.05, 0.95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
        flash: {
          "0%, 50%, 100%": { opacity: "1" },
          "25%, 75%": { opacity: "0" },
        },
        shake: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translateX(-10px)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "translateX(10px)",
          },
        },
        glow: {
          "0%": { backgroundColor: "#fcfcfd" },
          "30%": { backgroundColor: "#fff6cd" },
          "100%": { backgroundColor: "#fcfcfd" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        "::-webkit-slider-thumb": {
          "-moz-appearance": "none",
          "-webkit-appearance": "none",
          "border-radius": borderRadius.full,
          appearance: "none",
          backgroundColor: theme("colors.primary.DEFAULT"),
          border: "none",
          cursor: "pointer",
          height: spacing[4],
          width: spacing[4],
        },
        ".dark ::-webkit-slider-thumb": {
          backgroundColor: theme("colors.primary.lighter"),
        },
        ":disabled::-webkit-slider-thumb": {
          backgroundColor: theme("colors.neutral.400"),
        },
        ":disabled:focus::-webkit-slider-thumb": {
          backgroundColor: theme("colors.neutral.400"),
        },
        ":disabled:active::-webkit-slider-thumb": {
          backgroundColor: theme("colors.neutral.400"),
        },
        ".dark :disabled::-webkit-slider-thumb": {
          backgroundColor: theme("colors.neutral.500"),
        },
        ".dark :disabled:focus::-webkit-slider-thumb": {
          backgroundColor: theme("colors.neutral.500"),
        },
        ".dark :disabled:active::-webkit-slider-thumb": {
          backgroundColor: theme("colors.neutral.500"),
        },
        "::-moz-range-thumb": {
          "-moz-appearance": "none",
          "-webkit-appearance": "none",
          "border-radius": borderRadius.full,
          appearance: "none",
          backgroundColor: theme("colors.primary.DEFAULT"),
          border: "none",
          cursor: "pointer",
          height: spacing[4],
          width: spacing[4],
        },
        ".dark ::-moz-range-thumb": {
          backgroundColor: theme("colors.primary.400"),
        },
        ":disabled::-moz-range-thumb": {
          backgroundColor: theme("colors.neutral.400"),
        },
        ".dark :disabled::-moz-range-thumb": {
          backgroundColor: theme("colors.neutral.500"),
        },
        "::-moz-range-progress": {
          backgroundColor: theme("colors.primary.600"),
        },
        "::-ms-fill-lower": {
          backgroundColor: theme("colors.primary.600"),
        },
        ".dark ::-moz-range-progress": {
          backgroundColor: theme("colors.primary.500"),
        },
        ".dark ::-ms-fill-lower": {
          backgroundColor: theme("colors.primary.500"),
        },
        ":focus": {
          outline: "none",
        },
        ":focus::-webkit-slider-thumb": {
          backgroundColor: theme("colors.primary.600"),
        },
        ":active::-webkit-slider-thumb": {
          backgroundColor: theme("colors.primary.700"),
        },
        ".dark :focus::-webkit-slider-thumb": {
          backgroundColor: theme("colors.primary.500"),
        },
        ".dark :active::-webkit-slider-thumb": {
          backgroundColor: theme("colors.primary.600"),
        },
      });
    }),
  ],
};
export default config;
