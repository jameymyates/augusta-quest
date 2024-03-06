import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  // Typography

  fontBase: "Inter, sans-serif",
  fontCode: "Inconsolata, monospace",

  brandTitle: "Augusta Quest Storybook",
  brandUrl: "https://augusta.quest",
  brandImage: "https://augusta.quest/images/logo-light.png",
  brandTarget: "_self",

  // Main colors

  /* Picton Blue - #45b2e8 */
  colorPrimary: "hsl(200, 78%, 59% )",

  /* Crusta - #e87b45 */
  colorSecondary: "hsl(20, 78%, 60%)",

  // UI

  /* Wild Sand - #f4f4f5 */
  appBg: "hsl(240, 4%, 96%)",

  /* Wild Sand - #f4f4f5 */
  appContentBg: "hsl(240, 4%, 96%)",

  /* Wild Sand - #f4f4f5 */
  appPreviewBg: "hsl(240, 4%, 96%)",

  /* Iron - #cfcfd2 */
  appBorderColor: "hsl(240, 3%, 82%)",

  appBorderRadius: 4,

  // Text colors

  /* Bunker - #18181b */
  textColor: "hsl(240, 6%, 10%)",

  /* Wild Sand - #f4f4f5 */
  textInverseColor: "hsl(240, 4%, 96%)",

  /* Picton Blue - #45b2e8 */
  textMutedColor: "hsl(200, 78%, 59%)",

  // Toolbar default and active colors

  /* Dove Gray - #68676c */
  barTextColor: "hsl(252, 2%, 41%)",

  /* Picton Blue #45b2e8 */
  barSelectedColor: "hsl(200, 78%, 59%)",

  /* Wild Sand - #f4f4f5 */
  barBg: "hsl(240, 4%, 96%)",

  // Form colors

  /* Wild Sand - #f4f4f5 */
  inputBg: "hsl(240, 4%, 96%)",

  /* Bunker - #18181b */
  inputBorder: "hsl(240, 6%, 10%)",

  /* Bunker - #18181b */
  inputTextColor: "hsl(240, 6%, 10%)",

  inputBorderRadius: 2,
});
