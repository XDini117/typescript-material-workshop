import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import themeConfig from "./theme-config";

const darkTheme = createTheme({
  ...themeConfig,
});

export default responsiveFontSizes(darkTheme);
