import {
  alpha,
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
      info: {
        main: "#80808066",
        light: alpha("#80808066", 0.4),
        lighter: alpha("#80808066", 0.1),
      },
      background: {
        default: "#000000", // black hex
        paper: "#141414",
      },
    },
    typography: {
      h1: {
        fontSize: "3.375rem", // 54px to rem
        fontWeight: 700, // bold
      },
      h2: {
        fontSize: "2rem", // 32px to rem
        fontWeight: 700, // bold
      },
      h3: {
        fontSize: "1.5rem", // 24px to rem
        fontWeight: 700, // bold
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          sx: { textTransform: "capitalize" },
        },
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
