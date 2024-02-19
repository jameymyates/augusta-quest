import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta = {
  component: Button,
  title: "Features/UI/Button",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
