import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e50914",
    },
  },
});

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
