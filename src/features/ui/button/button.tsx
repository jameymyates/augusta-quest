import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva("button", {
  variants: {
    intent: {
      primary: ["bg-primary", "text-primary-foreground"],
      secondary: ["bg-secondary", "text-secondary-foreground"],
      tertiary: [
        "text-primary",
        "shadow-transparent",
        "hover:shadow-transparent",
        "focus:shadow-transparent",
        "active:shadow-transparent",
        "px-2",
        "pb-2",
        "pt-2.5",
        "text-xs",
      ],
      success: ["bg-success", "text-success-foreground"],
      warning: ["bg-warning", "text-warning-foreground"],
      danger: ["bg-danger", "text-danger-foreground"],
      info: ["bg-info", "text-info-foreground"],
      light: ["bg-light", "text-dark", "after:from-neutral/30"],
      dark: ["bg-neutral-950", "text-neutral-50"],
      link: [
        "text-primary",
        "shadow-transparent",
        "hover:shadow-transparent",
        "focus:shadow-transparent",
        "active:shadow-transparent",
      ],
      outline: [
        "border-2",
        "border-primary",
        "text-primary",
        "hover:bg-primary/15",
        "shadow-transparent",
        "hover:shadow-transparent",
        "focus:shadow-transparent",
        "active:shadow-transparent",
        "after:from-primary/30",
      ],
      floating: [
        "p-2",
        "rounded-full",
        "bg-primary",
        "text-primary-foreground",
      ],
    },
    size: {
      small: ["px-4", "pb-[5px]", "pt-[6px]", "text-xs"],
      medium: ["px-6", "pb-2", "pt-2.5", "text-xs"],
      large: ["px-7", "pb-2.5", "pt-3", "text-sm"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button>,
    React.PropsWithChildren {
  ripple?: boolean;
  rippleColor?: string;
}

const Button: React.FC<Readonly<ButtonProps>> = ({
  children,
  className,
  intent,
  ripple = true,
  rippleColor = "light",
  size,
}) => {
  if (intent === ("tertiary" || "link")) {
    ripple = false;
  }

  if (intent === "outline") {
    rippleColor = "primary";
  }

  if (intent === "light") {
    rippleColor = "#b8b9c1";
  }

  React.useEffect(() => {
    if (!ripple) return;

    const init = async () => {
      const { Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple });
    };

    init();
  }, [ripple]);

  return (
    <button
      className={cn(
        "inline-block relative overflow-hidden rounded text-base font-medium text-center uppercase leading-normal transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none shadow-[hsla(0,0%,0%,0.2)_0px_3px_1px_-2px,hsla(0,0%,0%,0.14)_0px_2px_2px_0px,hsla(0,0%,0%,0.12)_0px_1px_5px_0px] hover:shadow-[hsla(0,0%,0%,0.2)_0px_2px_4px_-1px,hsla(0,0%,0%,0.14)_0px_4px_5px_0px,hsla(0,0%,0%,0.12)_0px_1px_10px_0px] focus:shadow-[hsla(0,0%,0%,0.2)_0px_3px_1px_-2px,hsla(0,0%,0%,0.14)_0px_2px_2px_0px,hsla(0,0%,0%,0.12)_0px_1px_5px_0px] active:shadow-[hsla(0,0%,0%,0.2)_0px_5px_5px_-3px,hsla(0,0%,0%,0.14)_0px_8px_10px_1px,hsla(0,0%,0%,0.12)_0px_3px_14px_2px] after:bg-gradient-to-r after:from-white/30 after:to-transparent after:h-[155px] after:-left-[75px] after:absolute after:top-[-50px] after:rotate-[35deg] after:transition-all after:duration-[550ms] after:ease-[cubic-bezier(0.19,1,0.22,1)] after:w-[50px] after:z-10 hocus:after:left-[120%] hocus:after:transition-all hocus:after:duration-[550ms] hocus:after:ease-[cubic-bezier(0.19,1,0.22,1)]",
        button({ className, intent, size })
      )}
      data-te-ripple-color={ripple ? rippleColor : undefined}
      data-te-ripple-init={ripple}
      type="button"
    >
      <span className="z-20">{children}</span>
    </button>
  );
};

export type { ButtonProps };

export default Button;
