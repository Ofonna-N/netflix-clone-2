import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";

const appTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#e50914",
      },
      secondary: {
        main: "#ffffff",
      },
    },
    typography: {
      h1: {
        fontSize: "3.375rem", // 54px to rem
        fontWeight: 700, // bold
      },
    },
  })
);

export default function MuiThemeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
