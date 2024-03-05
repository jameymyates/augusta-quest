import Logo from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Logo,
  title: "Features/UI/Logo",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Augusta Quest brand logo component.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description:
        "Used to describe the image for screen readers and search engines.",
      table: {
        defaultValue: {
          summary: "Augusta Quest homepage",
        },
      },
      type: "string",
    },
    className: {
      control: "text",
      description:
        "The CSS class or space-separated classes. Set width or height with a class.",
      type: "string",
    },
    href: {
      control: "text",
      description: "The path or URL to navigate to.",
      required: true,
      type: "string",
    },
    layout: {
      control: "radio",
      description: "The logo layout.",
      options: [
        "horizontal",
        "icon",
        "icon-with-stacked-text",
        "stacked",
        "stacked-text",
      ],
      table: {
        defaultValue: {
          summary: "icon-with-stacked-text",
        },
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    className: "h-16",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Icon with stacked text logo layout. Picton Blue icon. Woodsmoke text in light mode and Alabaster text in dark mode.",
      },
    },
  },
};

export const Horizontal: Story = {
  args: {
    href: "#",
    layout: "horizontal",
    className: "h-12",
  },
  parameters: {
    docs: {
      description: {
        story: "Horizontal logo layout.",
      },
    },
  },
};

export const Icon: Story = {
  args: {
    href: "#",
    layout: "icon",
    className: "h-16",
  },
  parameters: {
    docs: {
      description: {
        story: "Icon only logo layout.",
      },
    },
  },
};

export const IconWithStackedText: Story = {
  args: {
    href: "#",
    layout: "icon-with-stacked-text",
    className: "h-16",
  },
  parameters: {
    docs: {
      description: {
        story: "Icon with stacked text logo layout.",
      },
    },
  },
};

export const Stacked: Story = {
  args: {
    href: "#",
    layout: "stacked",
    className: "h-32",
  },
  parameters: {
    docs: {
      description: {
        story: "Stacked icon and text logo layout.",
      },
    },
  },
};

export const StackedText: Story = {
  args: {
    href: "#",
    layout: "stacked-text",
    className: "h-16",
  },
  parameters: {
    docs: {
      description: {
        story: "Stacked text only logo layout.",
      },
    },
  },
};

export const Light: Story = {
  args: {
    href: "#",
    className: "[&_.logo-icon]:fill-light [&_.logo-text]:fill-light h-16",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    docs: {
      description: {
        story: "Light icon and text.",
      },
    },
  },
};

export const Dark: Story = {
  args: {
    href: "#",
    className: "[&_.logo-icon]:fill-dark [&_.logo-text]:fill-dark h-16",
  },
  parameters: {
    docs: {
      description: {
        story: "Dark icon and text.",
      },
    },
  },
};
