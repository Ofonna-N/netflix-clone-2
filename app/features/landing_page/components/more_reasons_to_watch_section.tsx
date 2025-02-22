import { Box, Container, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import monitorIcon from "~/assets/monitor.svg";
import downloadIcon from "~/assets/download.svg";
import telescopeIcon from "~/assets/telescope.svg";
import profilesIcon from "~/assets/profiles.svg";

const reasonsToJoinContent: {
  title: string;
  description: string;
  icon: string;
}[] = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: monitorIcon,
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favorites easily and always have something to watch.",
    icon: downloadIcon,
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
    icon: telescopeIcon,
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    icon: profilesIcon,
  },
];

export default function MoreReasonsToWatchSection() {
  return (
    <Box component={"section"} sx={{ pb: 5 }}>
      <Container>
        <Typography variant="h2" mb={3}>
          More Reasons to Join
        </Typography>
        <Box>
          <Grid container spacing={2}>
            {reasonsToJoinContent.map((reason, index) => {
              return (
                <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      height: {
                        xs: "250px",
                        lg: "330px",
                      },
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      backgroundImage: `linear-gradient(149deg,#192247 0%,#210e17 96.86%)`,
                    }}
                  >
                    <Typography variant="h3" py={2}>
                      {reason.title}
                    </Typography>
                    <Typography>{reason.description}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "right",
                        alignItems: "flex-end",

                        height: "100%",
                      }}
                    >
                      <Box
                        component={"img"}
                        src={reason.icon}
                        alt={"popcorn icon"}
                        width={72}
                        height={72}
                      />
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
