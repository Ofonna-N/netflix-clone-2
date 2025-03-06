import { Outlet } from "react-router";
import SelectAccountView from "~/features/browse/components/select_account_view";
import useAuthContext from "~/hooks/use_auth_context";
import { Box } from "@mui/material";
import NavBar from "~/features/browse/components/nav_bar";

export default function BrowseLayout() {
  const authContext = useAuthContext();

  if (!authContext.user) {
    return <SelectAccountView />;
  }
  return (
    <Box>
      <NavBar />
      <Outlet />;
    </Box>
  );
}
