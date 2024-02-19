import Script from "next/script";
import {
  fontDisplay,
  fontMono,
  fontSans,
  fontSerif,
} from "@/features/ui/fonts";
import { Providers } from "@/lib/providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Providers>
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
            "text-base antialiased font-sans font-normal",
            fontDisplay.variable,
            fontMono.variable,
            fontSans.variable,
            fontSerif.variable
          )}
        >
          {children}
          <Script src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js" />
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
