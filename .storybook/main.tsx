import type { StorybookConfig } from "@storybook/nextjs";
import * as path from "path";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
  ],
  docs: {
    autodocs: "tag",
  },
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {},
      nextConfigPath: path.resolve(__dirname, "../next.config.mjs"),
    },
  },
  staticDirs: ["../public"],
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
      };
    }

    return config;
  },
};
export default config;
