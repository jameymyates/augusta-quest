import SecondaryMenu from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: SecondaryMenu,
  title: "Features/UI/Secondary Menu",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SecondaryMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
