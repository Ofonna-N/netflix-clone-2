import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  layout("routes/browse/layout.tsx", [
    index("routes/browse/select_account.tsx"),
    route("browse", "routes/browse/browse.tsx"),
  ]),
] satisfies RouteConfig;
