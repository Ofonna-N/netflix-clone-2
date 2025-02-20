import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Hero() {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        zIndex: 5,
        position: "relative",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
          maxWidth: "sm",
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h1">
          Unlimited movies, TV shows, and more
        </Typography>
        <Typography>Starts at $7.99. Cancel anytime.</Typography>
        <Typography component={"h3"}>
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1em",
            alignItems: "center",
            // backgroundColor: "green",
            width: "100%",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <TextField
            placeholder="Email address"
            sx={{
              flex: 1,
              alignSelf: {
                xs: "center",
                sm: "stretch",
              },
            }}
            color="secondary"
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              alignSelf: {
                xs: "center",
                sm: "stretch",
              },
              textTransform: "capitalize",
            }}
            endIcon={<ArrowForwardIosIcon />}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "black",
          height: "100px",
          borderRadius: "50% 50% 0 0",
          position: "relative",

          backgroundImage: `radial-gradient(
                    50% 500% at 50% -420%,
                    rgba(64, 97, 231, 0.4) 80%,
                    rgba(0, 0, 0, 0.1) 100%
                )`,
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "yellow",
            borderRadius: "inherit",
            transform: "translateY(-5px)",
            zIndex: -1,
            backgroundImage: `linear-gradient(
              to right,
              rgba(33, 13, 22, 1) 16%,
              rgba(184, 40, 105, 1),
              rgba(229, 9, 20, 1),
              rgba(184, 40, 105, 1),
              rgba(33, 13, 22, 1) 84%
          )`,
          },
        }}
      ></Box>
    </Box>
  );
}
