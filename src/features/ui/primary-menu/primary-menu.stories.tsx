import PrimaryMenu from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: PrimaryMenu,
  title: "Features/UI/Primary Menu",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PrimaryMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
