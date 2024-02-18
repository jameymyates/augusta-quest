import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./footer";

const meta = {
  component: Footer,
  title: "Features/UI/Footer",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
