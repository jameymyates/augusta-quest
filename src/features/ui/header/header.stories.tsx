import Header from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Header,
  title: "Features/UI/Header",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
