import { Box, Container } from "@mui/material";
import BackgroundImage from "~/features/landing_page/components/background_image";
import LoginForm from "~/features/login_page/components/login_form";
import LoginNavBar from "~/features/login_page/components/login_nav_bar";

export default function Login() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        "::before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: {
            xs: "black",
            sm: "rgba(0, 0, 0, 0.45)",
          },
          zIndex: 2,
        },
      }}
    >
      <BackgroundImage />
      <LoginNavBar />
      <Container maxWidth="sm" sx={{ zIndex: 3, position: "relative" }}>
        <LoginForm />
      </Container>
    </Box>
  );
}
