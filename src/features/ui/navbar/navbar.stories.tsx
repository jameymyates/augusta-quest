import Navbar from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Navbar,
  title: "Features/UI/Navbar",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
