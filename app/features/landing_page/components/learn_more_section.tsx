import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import popcornIcon from "~/assets/popcorn.svg";
import SquidGameDialog from "./squid_game_dialog";

export default function LearnMoreSection() {
  const [openLearnMoreDialog, setOpenLearnMoreDialog] = useState(false);
  return (
    <Box
      sx={{
        height: {
          xs: "auto",
          md: "100px",
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
        }}
      >
        <Box
          component={motion.div}
          initial={{ scale: 1 }}
          whileHover={"hover"}
          variants={{
            hover: {
              scale: 1.05,
            },
          }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            position: {
              xs: "relative",
              md: "absolute",
            },
            top: "-50px",
            width: "100%",
            left: 0,
            zIndex: 10000,
            transition: "transform 0.3s ease-in-out",
            flexWrap: "wrap",
            px: 3,
          }}
        >
          <Box
            component={"img"}
            src={popcornIcon}
            alt={"popcorn icon"}
            sx={{
              width: "70px",
              height: "70px",
              transform: {
                xs: "translateY(15px)",
                md: "translateY(-5px)",
              },
            }}
          />
          <Box
            component={motion.div}
            variants={{
              hover: {
                backgroundImage:
                  "linear-gradient(91deg,rgb(124, 67, 173) 0%,rgb(26, 36, 114) 99.51%)",
              },
            }}
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
              flexWrap: "wrap",
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
            <Button
              variant="contained"
              color={"info"}
              onClick={() => setOpenLearnMoreDialog(true)}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
      <SquidGameDialog
        openDialog={openLearnMoreDialog}
        openDialogHanlder={setOpenLearnMoreDialog}
      />
    </Box>
  );
}
