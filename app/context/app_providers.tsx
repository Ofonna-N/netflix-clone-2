import ApiClientProvider from "./api_client_provider";
import AuthProvider from "./auth_provider";
import MuiThemeProviders from "./mui_theme_providers";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MuiThemeProviders>
      <ApiClientProvider>
        <AuthProvider>{children}</AuthProvider>
      </ApiClientProvider>
    </MuiThemeProviders>
  );
}
