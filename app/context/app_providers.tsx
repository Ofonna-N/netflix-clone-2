import MuiThemeProviders from "./mui_theme_providers";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MuiThemeProviders>{children}</MuiThemeProviders>;
}
