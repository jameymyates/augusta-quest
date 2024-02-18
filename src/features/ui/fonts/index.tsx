/**
 * If you change these fonts, be sure to update the code in
 * ./storybook/preview-head.html to match.
 *
 * If you have a better solution to automatically pull in the
 * fonts from Next.js to Storybook, that would be ideal.
 */
import {
  Inter as FontSans,
  Lora as FontSerif,
  Inconsolata as FontMono,
  Inter_Tight as FontDisplay,
} from "next/font/google";

const fontDisplay = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
});
const fontMono = FontMono({ subsets: ["latin"], variable: "--font-mono" });
const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontSerif = FontSerif({ subsets: ["latin"], variable: "--font-serif" });

export { fontDisplay, fontMono, fontSans, fontSerif };
