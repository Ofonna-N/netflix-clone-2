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
            }}
            endIcon={<ArrowForwardIosIcon />}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "black", height: "150px" }}>B</Box>
    </Box>
  );
}
