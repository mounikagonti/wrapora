"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import AuthListener from "./AuthListener";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AuthListener />
      {children}
    </Provider>
  );
};

export default ReduxProvider;
