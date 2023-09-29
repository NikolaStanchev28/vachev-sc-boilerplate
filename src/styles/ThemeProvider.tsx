import { PropsWithChildren } from "react";
import { ThemeProvider as _ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <_ThemeProvider theme={theme}>{children}</_ThemeProvider>
);
