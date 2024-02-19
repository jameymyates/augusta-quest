"use client";

import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { reduxStore } from "@/lib/redux";

const Providers = (props: PropsWithChildren) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};

export { Providers };
