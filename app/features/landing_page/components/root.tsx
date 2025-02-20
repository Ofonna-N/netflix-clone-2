import { Box } from "@mui/material";
import Header from "./header";
import Hero from "./hero";
import BackgroundImage from "./background_image";

export default function Landing() {
  return (
    <Box>
      <Box
        component={"main"}
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(150deg, rgba(0, 0, 0, 0.79) 25%, rgba(255,255,255,0) 100%)",
            zIndex: 2,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(10deg, rgba(0, 0, 0, 0.79) 15%, rgba(255,255,255,0) 100%)",
            zIndex: 2,
          },
        }}
      >
        <BackgroundImage />
        <Header />
        <Hero />
      </Box>
      <Box
        sx={{
          height: "200px",
          backgroundColor: "black",
        }}
      >
        Content
      </Box>
    </Box>
  );
}
