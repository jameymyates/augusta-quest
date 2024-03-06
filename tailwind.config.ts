import { spacing, borderRadius, fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Wild Sand - #f4f4f5
        light: "hsl(240 4% 96% / <alpha-value>)",
        // Bunker - #18181b
        dark: "hsl(240 4% 10% / <alpha-value>)",
        primary: {
          // Picton Blue - #45b2e8 (500)
          DEFAULT: "hsl(200 78% 59% / <alpha-value>)",
          50: "hsl(200 75% 97% / <alpha-value>)",
          100: "hsl(200 80% 94% / <alpha-value>)",
          200: "hsl(200, 78%, 87% / <alpha-value>)",
          300: "hsl(200 78% 79% / <alpha-value>)",
          400: "hsl(200 77% 70% / <alpha-value>)",
          500: "hsl(200 78% 59% / <alpha-value>)",
          600: "hsl(200 79% 50% / <alpha-value>)",
          700: "hsl(200 78% 44% / <alpha-value>)",
          800: "hsl(200 79% 36% / <alpha-value>)",
          900: "hsl(200 77% 26% / <alpha-value>)",
          950: "hsl(200 79% 19% / <alpha-value>)",
          foreground: "hsl(200 75% 97% / <alpha-value>)",
        },
        secondary: {
          // Crusta - #e97e49 (500)
          DEFAULT: "hsl(20 78% 60% / <alpha-value>)",
          50: "hsl(20 75% 97% / <alpha-value>)",
          100: "hsl(20 80% 94% / <alpha-value>)",
          200: "hsl(20 77% 88% / <alpha-value>)",
          300: "hsl(20 78% 80% / <alpha-value>)",
          400: "hsl(20 78% 71% / <alpha-value>)",
          500: "hsl(20 78% 60% / <alpha-value>)",
          600: "hsl(20 79% 52% / <alpha-value>)",
          700: "hsl(20 79% 46% / <alpha-value>)",
          800: "hsl(20 79% 37% / <alpha-value>)",
          900: "hsl(20 79% 28% / <alpha-value>)",
          950: "hsl(20 78% 18% / <alpha-value>)",
          foreground: "hsl(20 75% 97% / <alpha-value>)",
        },
        success: {
          // Bilbao - #4c7b0e (500)
          DEFAULT: "hsl(86 79% 27% / <alpha-value>)",
          50: "hsl(86 80% 92% / <alpha-value>)",
          100: "hsl(86 78% 82% / <alpha-value>)",
          200: "hsl(86 78% 59% / <alpha-value>)",
          300: "hsl(86 78% 45% / <alpha-value>)",
          400: "hsl(86 79% 38% / <alpha-value>)",
          500: "hsl(86 79% 27% / <alpha-value>)",
          600: "hsl(86 78% 25% / <alpha-value>)",
          700: "hsl(86 77% 21% / <alpha-value>)",
          800: "hsl(86 80% 17% / <alpha-value>)",
          900: "hsl(86 78% 12% / <alpha-value>)",
          950: "hsl(86 77% 10% / <alpha-value>)",
          foreground: "hsl(86 80% 92% / <alpha-value>)",
        },
        danger: {
          // Monza - #ba1c1c (500)
          DEFAULT: "hsl(0 74% 42% / <alpha-value>)",
          50: "hsl(0 74% 97% / <alpha-value>)",
          100: "hsl(0 73% 94% / <alpha-value>)",
          200: "hsl(0 73% 88% / <alpha-value>)",
          300: "hsl(0 74% 79% / <alpha-value>)",
          400: "hsl(0 74% 67% / <alpha-value>)",
          500: "hsl(0 74% 42% / <alpha-value>)",
          600: "hsl(0 74% 38% / <alpha-value>)",
          700: "hsl(0 73% 34% / <alpha-value>)",
          800: "hsl(0 74% 29% / <alpha-value>)",
          900: "hsl(0 74% 18% / <alpha-value>)",
          950: "hsl(0 74% 12% / <alpha-value>)",
          foreground: "hsl(0 74% 97% / <alpha-value>)",
        },
        warning: {
          // Tulip Tree - #e9b007 (500)
          DEFAULT: "hsl(45 94% 47% / <alpha-value>)",
          50: "hsl(47 90% 96% / <alpha-value>)",
          100: "hsl(46 91% 91% / <alpha-value>)",
          200: "hsl(45 94% 81% / <alpha-value>)",
          300: "hsl(45 94% 69% / <alpha-value>)",
          400: "hsl(44 93% 54% / <alpha-value>)",
          500: "hsl(45 94% 47% / <alpha-value>)",
          600: "hsl(45 94% 42% / <alpha-value>)",
          700: "hsl(45 91% 37% / <alpha-value>)",
          800: "hsl(45 92% 31% / <alpha-value>)",
          900: "hsl(45 92% 23% / <alpha-value>)",
          950: "hsl(45 92% 16% / <alpha-value>)",
          foreground: "hsl(45 92% 16% / <alpha-value>)",
        },
        info: {
          // Timberwolf - #dbd7d2 (500)
          DEFAULT: "hsl(33 11% 84% / <alpha-value>)",
          50: "hsl(0 20% 99% / <alpha-value>)",
          100: "hsl(0 7% 97% / <alpha-value>)",
          200: "hsl(40 10% 94% / <alpha-value>)",
          300: "hsl(24 11% 91% / <alpha-value>)",
          400: "hsl(34 11% 88% / <alpha-value>)",
          500: "hsl(33 11% 84% / <alpha-value>)",
          600: "hsl(30 11% 76% / <alpha-value>)",
          700: "hsl(32 11% 66% / <alpha-value>)",
          800: "hsl(32 11% 54% / <alpha-value>)",
          900: "hsl(33 11% 40% / <alpha-value>)",
          950: "hsl(34 11% 29% / <alpha-value>)",
          foreground: "hsl(34 11% 29% / <alpha-value>)",
        },
        neutral: {
          // Bombay - #b5b5ba (500)
          DEFAULT: "hsl(240 3% 72% / <alpha-value>)",
          50: "hsl(240 4% 96% / <alpha-value>)",
          100: "hsl(240 6% 93% / <alpha-value>)",
          200: "hsl(240 5% 88% / <alpha-value>)",
          300: "hsl(240 3% 83% / <alpha-value>)",
          400: "hsl(240 4% 77% / <alpha-value>)",
          500: "hsl(240 3% 72% / <alpha-value>)",
          600: "hsl(240 4% 65% / <alpha-value>)",
          700: "hsl(240 4% 56% / <alpha-value>)",
          800: "hsl(240 4% 45% / <alpha-value>)",
          900: "hsl(240 3% 28% / <alpha-value>)",
          950: "hsl(240 4% 10% / <alpha-value>)",
          foreground: "hsl(240 4% 10% / <alpha-value>)",
        },
      },
      boxShadow: {
        "te-primary": "0 0 0 1px hsl(200,78%,59%)",
        1: "0 0 2px 0 hsla(0,0%,0%,0.07), 0 1px 1px 0 hsla(0,0%,0%,0.04)",
        "1-strong":
          "0 0 2px 0 hsla(0,0%,0%,0.04), 0 1px 1px 0 hsla(0,0%,0%,0.1)",
        2: "0 0 3px 0 hsla(0,0%,0%,0.07), 0 2px 2px 0 hsla(0,0%,0%,0.04)",
        "2-strong":
          "0 0 3px 0 hsla(0,0%,0%,0.04), 0 2px 2px 0 hsla(0,0%,0%,0.1)",
        3: "0 2px 6px -1px hsla(0,0%,0%,0.07), 0 6px 18px -1px hsla(0,0%,0%,0.04)",
        "3-strong":
          "0 2px 6px -1px hsla(0,0%,0%,0.04), 0 6px 18px -1px hsla(0,0%,0%,0.1)",
        4: "0 2px 15px -3px hsla(0,0%,0%,0.07), 0 10px 20px -2px hsla(0,0%,0%,0.04)",
        "4-strong":
          "0 2px 15px -3px hsla(0,0%,0%,0.04), 0 10px 20px -2px hsla(0,0%,0%,0.1)",
        5: "0 2px 25px -5px hsla(0,0%,0%,0.07), 0 25px 21px -5px hsla(0,0%,0%,0.04)",
        "5-strong":
          "0 2px 25px -5px hsla(0,0%,0%,0.04), 0 25px 21px -5px hsla(0,0%,0%,0.1)",
        "twe-inner": "inset 0 2px 4px 0 hsla(0,0%,0%,0.05)",
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
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
    plugin(function ({ addBase, theme }: any) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    }),
  ],
};
export default config;
