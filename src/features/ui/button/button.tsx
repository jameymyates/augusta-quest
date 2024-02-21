import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

const Button: FC<
  Readonly<
    ButtonHTMLAttributes<HTMLButtonElement> &
      VariantProps<typeof button> &
      PropsWithChildren
  >
> = ({ children, className, intent, size }) => {
  return (
    <button className={button({ intent, size, className })} type="button">
      {children}
    </button>
  );
};

export default Button;
