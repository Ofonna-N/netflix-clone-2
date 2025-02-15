import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const appTheme = createTheme({});

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
