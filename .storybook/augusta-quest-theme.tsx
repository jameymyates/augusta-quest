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

  /* Picton Blue #45b2e8 */
  colorPrimary: "hsl(200, 78%, 59% )",

  /* Crusta #e87b45 */
  colorSecondary: "hsl(20, 78%, 59%)",

  // UI

  /* Alabaster #f7f7f8 */
  appBg: "hsl(240, 7%, 97%)",

  /* Alabaster #f7f7f8 */
  appContentBg: "hsl(240, 7%, 97%)",

  /* Alabaster #f7f7f8 */
  appPreviewBg: "hsl(240, 7%, 97%)",

  /* Alto #dadadd */
  appBorderColor: "hsl(240, 4%, 86%)",

  appBorderRadius: 4,

  // Text colors

  /* Woodsmoke #18181a */
  textColor: "hsl(240, 4%, 10%)",

  /* Alabaster #f7f7f8 */
  textInverseColor: "hsl(240, 7%, 97%)",

  /* Picton Blue #45b2e8 */
  textMutedColor: "hsl(200, 78%, 59%)",

  // Toolbar default and active colors

  /* Jumbo #767781 */
  barTextColor: "hsl(235, 4%, 48%)",

  /* Picton Blue #45b2e8 */
  barSelectedColor: "hsl(200, 78%, 59%)",

  /* Alabaster #f7f7f8 */
  barBg: "hsl(240, 7%, 97%)",

  // Form colors

  /* Alabaster #f7f7f8 */
  inputBg: "hsl(240, 7%, 97%)",

  /* Woodsmoke #18181a */
  inputBorder: "hsl(240, 4%, 10%)",

  /* Woodsmoke #18181a */
  inputTextColor: "hsl(240, 4%, 10%)",

  inputBorderRadius: 2,
});
