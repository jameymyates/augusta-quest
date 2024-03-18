import { FC, PropsWithChildren } from "react";
import {
  fontDisplay,
  fontMono,
  fontSans,
  fontSerif,
} from "@/features/ui/fonts";
import { Providers } from "@/lib/providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const RootLayout: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      {/**
       * If you change the Tailwind classes in the body tag, be
       * sure to update them in ./storybook/preview-body.html as well.
       *
       * We could have them automatically applied by putting them in
       * ./src/styles/globals.css, but I opted to keep them in the jsx
       * like other styling.
       */}
      <body
        className={cn(
          "bg-light text-dark dark:bg-dark dark:text-light text-base antialiased font-sans font-normal",
          fontDisplay.variable,
          fontMono.variable,
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
