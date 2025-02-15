import { Box, Button, TextField, Typography } from "@mui/material";
import Header from "./header";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Landing() {
  return (
    <Box>
      <Box
        component={"main"}
        sx={{
          height: "100vh",
          //   minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          //   backgroundColor: "wheat",
        }}
      >
        <Header />
        <Box
          sx={{
            backgroundColor: "GrayText",
            flex: 1,
            display: "flex",
            flexDirection: "column",
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
              Ready to watch? Enter your email to create or restart your
              membership.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "1em",
                alignItems: "center",
                // backgroundColor: "green",
                width: "100%",
              }}
            >
              <TextField
                placeholder="Email address"
                sx={{ flex: 1 }}
                color="secondary"
              />
              <Button
                variant="contained"
                size="large"
                sx={{ alignSelf: "stretch" }}
                endIcon={<ArrowForwardIosIcon />}
              >
                Get Started
              </Button>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "black", height: "150px" }}>B</Box>
        </Box>
      </Box>
    </Box>
  );
}
