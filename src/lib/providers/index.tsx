"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { reduxStore } from "@/lib/redux";

const Providers = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <Provider store={reduxStore}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export { Providers };
