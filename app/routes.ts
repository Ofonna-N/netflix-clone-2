import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  ...prefix("browse", [
    layout("routes/browse/browse_layout.tsx", [
      index("routes/browse/browse.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
