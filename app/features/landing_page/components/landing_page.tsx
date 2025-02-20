import {
  alpha,
  Box,
  Button,
  Container,
  styled,
  Typography,
  type ButtonProps,
} from "@mui/material";
import Header from "./header";
import Hero from "./hero";
import BackgroundImage from "./background_image";
import popcornIcon from "~/assets/popcorn.svg";

export default function LandingPage() {
  const LearnMoreButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "color",
  })<ButtonProps>(({ theme }) => ({
    width: 300,
    variants: [
      {
        props: ({ color }) => alpha(color as string, 0.4),
        style: {
          color: theme.palette.success.main,
        },
      },
    ],
  }));
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
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
              position: "absolute",
              top: "-50px",
              width: "100%",
              left: 0,
              zIndex: 10000,
              transition: "transform 0.3s ease-in-out",
              ":hover": {
                transform: "scale(1.05)",
              },
              ":hover #learn-more-div": {
                backgroundImage:
                  "linear-gradient(91deg,rgb(124, 67, 173) 0%,rgb(26, 36, 114) 99.51%)",
              },
            }}
          >
            <Box
              component={"img"}
              src={popcornIcon}
              alt={"popcorn icon"}
              sx={{
                width: "70px",
                height: "70px",
                transform: "translateY(-5px)",
              }}
            />
            <Box
              id="learn-more-div"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                gap: 1,
                backgroundImage:
                  "linear-gradient(91deg, #482566 0%, #161d52 99.51%)",
                py: 2,
                px: 3,
                borderRadius: 3,
                transition: "all 0.8s ease-in-out",
              }}
            >
              <Box>
                <Typography variant="h3">
                  The Flixclone you love for just $9.99.
                </Typography>
                <Typography>
                  Get our most affordable, ad-supported plan.
                </Typography>
              </Box>
              <Button variant="contained" color={"info"}>
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
