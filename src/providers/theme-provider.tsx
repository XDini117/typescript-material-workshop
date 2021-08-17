import { ReactNode, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from '@material-ui/core/CssBaseline'

import { themeContext, themeInitialState } from "../contexts/theme-context";

interface ThemeProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProps) {
  const [themeType, setThemeType] = useState(themeInitialState.themeType);
  const [themes, setThemes] = useState(themeInitialState.themes);
  const actualTheme = themes[themeType] || themes.dark || themes.light;

  const value = {
    themeType,
    themes,
    setThemeType,
  };

  return (
    <themeContext.Provider value={value}>
      <MuiThemeProvider theme={actualTheme}>{children}</MuiThemeProvider>
    </themeContext.Provider>
  );
}
