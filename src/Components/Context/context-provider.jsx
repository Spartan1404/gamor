import React from "react";
import { ThemeProvider } from "./theme/theme-provider";
import { SessionProvider } from "./session/session-provider";

const ContextProvider = ({ children }) => {
  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  );
};

export default ContextProvider;
