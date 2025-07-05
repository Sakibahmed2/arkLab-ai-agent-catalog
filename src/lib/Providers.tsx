"use client";

import store from "@/redux/store";
import { TChildren } from "@/types/global";
import React from "react";
import { Provider } from "react-redux";

const Providers = ({ children }: TChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
