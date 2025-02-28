import AuthProvider from "./auth_provider";
import MuiThemeProviders from "./mui_theme_providers";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MuiThemeProviders>
      <AuthProvider>{children}</AuthProvider>
    </MuiThemeProviders>
  );
}
