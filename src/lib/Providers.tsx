/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import store from "@/redux/store";
import { TChildren } from "@/types/global";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import AuthProviders from "./AuthProviders";

const Providers = ({ children }: TChildren) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <AuthProviders>{children}</AuthProviders>
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
