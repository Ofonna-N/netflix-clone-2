import { Outlet } from "react-router";
import SelectAccountView from "~/features/browse/components/select_account_view";
import useAuthContext from "~/hooks/use_auth_context";

export default function BrowseLayout() {
  const user = useAuthContext();
  console.log(user);

  if (!user) {
    return <SelectAccountView />;
  }
  return <Outlet />;
}
