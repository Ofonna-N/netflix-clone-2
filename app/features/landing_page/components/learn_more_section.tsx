import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import popcornIcon from "~/assets/popcorn.svg";
import squidGameTitle from "~/assets/squid game title.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
const metaData = ["2025", "TV-MA", "Show", "Thrillers, Dramas"];

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
      <Dialog
        open={openLearnMoreDialog}
        onClose={() => setOpenLearnMoreDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        sx={{ zIndex: 100000 }}
        slotProps={{
          paper: {
            sx: {
              borderRadius: 3,
            },
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          <Box
            sx={{
              height: "400px",
              width: "100%",
              backgroundColor: "wheat",
              position: "relative",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 100,
              }}
              onClick={() => setOpenLearnMoreDialog(false)}
            >
              <CloseIcon fontSize="large" />
            </IconButton>

            <Box
              component={"img"}
              src="https://occ-0-853-851.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABVV9gbt3EJsyDMLSD-0Jk01mW5lvHJX1STWaCA0VYXvolLOLAtSc3ufX4YLlJUFrL3QIzieFK_1tQJGhJbPCKqElfp48VWpHAjyx.webp?r=513"
              alt="banner"
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                top: 0,
                left: 0,
              }}
            />
            <Box
              component={"img"}
              src={squidGameTitle}
              alt="title"
              sx={{
                position: "absolute",
                width: "200px",
                // aspectRatio: "25/14",
                objectFit: "cover",
                bottom: 0,
                left: 20,
                zIndex: 10000,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: `linear-gradient(40deg, #161616 24.16%, rgba(6, 10, 23, 0) 56.61%), 
                linear-gradient(0deg, rgb(22, 22, 22) 3.91%, rgba(6, 10, 23, 0) 69.26%)`,
                },
              }}
            ></Box>
          </Box>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ p: 3, backgroundColor: "#161616" }}
          >
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {metaData.map((data, index) => {
                return (
                  <Paper
                    key={index}
                    sx={{ p: 0.5, bgcolor: "#414141", fontSize: "14px" }}
                    elevation={0}
                  >
                    {data}
                  </Paper>
                );
              })}
            </Box>
            Hundreds of cash-strapped players accept a strange invitation to
            compete in children's games. Inside, a tempting prize awaits — with
            deadly high stakes.
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "flex-start",
            bgcolor: "#161616",
            px: 3,
            pb: 3,
          }}
        >
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIosIcon />}
          >
            Get Started
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
