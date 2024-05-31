'use client';
import { ThemeProvider, createTheme } from "@mui/material";
import componentOverrides from "./options/component";
// import lightPalette from "./palette.light";
import typography from "./options/typography";

const AppThemeProvider = ({ children }:any) => {
  const theme = createTheme({
    typography,
    components: componentOverrides,
  });

  return <ThemeProvider theme={theme}>
  {children}
  </ThemeProvider>;
};

export default AppThemeProvider;