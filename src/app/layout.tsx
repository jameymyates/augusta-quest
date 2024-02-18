import {
  fontDisplay,
  fontMono,
  fontSans,
  fontSerif,
} from "@/features/ui/fonts";
import { cn } from "@/utils";
import "@/styles/globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
          fontDisplay.variable,
          fontMono.variable,
          fontSans.variable,
          fontSerif.variable
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
