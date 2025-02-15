import type { Route } from "./+types/home";
import { Box } from "@mui/material";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Box>
    Hello
  </Box>;
}
