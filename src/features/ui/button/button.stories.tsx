import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta = {
  component: Button,
  title: "Features/UI/Button",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The contents of the button.",
    },
    intent: {
      control: "radio",
      description: "The style variant of the button.",
      options: [
        "default",
        "primary",
        "secondary",
        "tertriary",
        "success",
        "warning",
        "info",
        "light",
        "dark",
        "outline",
        "floating",
      ],
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
      title: {
        control: "text",
        description:
          "Used to describe an icon button for screen readers and search engines.",
      },
      type: "string",
    },
    size: {
      control: "radio",
      description: "The size variant of the button.",
      options: ["small", "medium", "large"],
      table: {
        defaultValue: {
          summary: "medium",
        },
      },
      type: "string",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    intent: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    intent: "secondary",
  },
};

export const Tertriary: Story = {
  args: {
    children: "Tertriary",
    intent: "tertriary",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    intent: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    intent: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    intent: "danger",
  },
};

export const Info: Story = {
  args: {
    children: "Info",
    intent: "info",
  },
};

export const Light: Story = {
  args: {
    children: "Light",
    intent: "light",
  },
};

export const Dark: Story = {
  args: {
    children: "Dark",
    intent: "dark",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    intent: "outline",
  },
};

export const Floating: Story = {
  args: {
    children: "Floating",
    intent: "floating",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "large",
  },
};
