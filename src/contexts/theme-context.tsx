import { createContext, useContext, Dispatch, SetStateAction } from "react";

import dark from "../themes/dark";

type ThemeType = "light" | "dark";

interface ThemesType {
  light: any;
  dark: any;
}

interface ThemeState {
  themeType: ThemeType;
  themes: ThemesType;
}

interface ThemeContextType extends ThemeState {
  setThemeType: Dispatch<SetStateAction<ThemeType>>;
}

export const themeInitialState: ThemeState = {
  themeType: "dark",
  themes: {
    light: null,
    dark,
  },
};

export const themeContext = createContext<ThemeContextType>({
  ...themeInitialState,
  setThemeType: () => {},
});

export const useTheme = () => useContext(themeContext);
