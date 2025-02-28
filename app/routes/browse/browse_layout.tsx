import { Outlet } from "react-router";
import useAuthContext from "~/hooks/use_auth_context";

export default function BrowseLayout() {
  const user = useAuthContext();
  console.log(user);

  return <Outlet />;
}
