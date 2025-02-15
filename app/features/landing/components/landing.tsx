import { Box } from "@mui/material";
import Header from "./header";
import Hero from "./hero";

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
        <Box
          component={"img"}
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/US-en-20250210-TRIFECTA-perspective_5cc3f8aa-0c98-40f5-96f7-ac7e4af57d4a_medium.jpg"
          }
          alt="hero image"
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 1,
          }}
        />
        <Header />
        <Hero />
      </Box>
    </Box>
  );
}
