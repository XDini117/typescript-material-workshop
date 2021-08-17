import { createTheme } from "@material-ui/core/styles";

import themeConfig from "./theme-config";

const darkTheme = createTheme({
  ...themeConfig,
  palette: {
    type: "dark",
    common: {
      black: "rgba(45, 45, 45, 1)",
      white: "rgba(255, 248, 231, 1)",
    },
    background: {
      paper: "rgba(45, 45, 45, 1)",
      default: "rgba(0, 0, 0, 1)",
    },
    primary: {
      light: "rgba(255, 125, 159, 1)",
      main: "rgba(232, 73, 113, 1)",
      dark: "rgba(177, 0, 70, 1)",
      contrastText: "rgba(255, 248, 231, 1)",
    },
    secondary: {
      light: "rgba(206, 136, 255, 1)",
      main: "rgba(155, 89, 208, 1)",
      dark: "rgba(105, 43, 158, 1)",
      contrastText: "rgba(255, 248, 231, 1)",
    },
    error: {
      light: "rgba(255, 175, 109, 1)",
      main: "rgba(244, 126, 63, 1)",
      dark: "rgba(188, 79, 16, 1)",
      contrastText: "rgba(255, 248, 231, 1)",
    },
    text: {
      primary: "rgba(255, 248, 231, 1)",
      secondary: "rgba(150, 150, 150, 1)",
      disabled: "rgba(255, 244, 51, 1)",
      hint: "rgba(255, 244, 51, 1)",
    },
  },
});

export default darkTheme;
