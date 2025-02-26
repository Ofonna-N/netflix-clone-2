import { Container } from "@mui/material";
import { Link as RouterLink } from "react-router";
import Logo from "~/components/logo";

export default function LoginNavBar() {
  return (
    <Container sx={{ py: 2, zIndex: 3, position: "relative" }}>
      <RouterLink to={"/"}>
        <Logo />
      </RouterLink>
    </Container>
  );
}
