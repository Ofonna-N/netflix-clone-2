import { Box, Button, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import favicon from "~/assets/favicon.svg";
import type { Movie } from "~/types/movie";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";

type Props = {
  billboardMovie: Movie | undefined;
};
const baseURL = "https://image.tmdb.org/t/p/original/";

export default function Billboard(props: Props) {
  const { billboardMovie } = props;

  const [motionRef] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    motionRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 2000,
    });
  }, [billboardMovie?.title]);

  return (
    <Box
      ref={motionRef}
      sx={{
        width: "100%",
        backgroundColor: "royalblue",
        minHeight: "400px",
        maxHeight: "800px",
        position: "relative",
        top: "0",
        left: "0",
        aspectRatio: "16/9",
        "::before": {
          content: "''",
          display: "block",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "400px",
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 20%,rgba(0,0,0,0) 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          zIndex: 999,
        },
        "::after": {
          content: "''",
          display: "block",
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,1) 5%,rgba(0,0,0,0) 20%,rgba(0,0,0,0) 100%)",
          zIndex: 999,
        },
      }}
    >
      <Box
        component={"img"}
        src={baseURL + billboardMovie?.backdrop_path}
        alt={billboardMovie?.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          px: 2,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 1000,
            bottom: {
              xs: 50,
              lg: 200,
            },
            left: 30,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <Box
              component={"img"}
              alt="icon"
              src={favicon}
              sx={{ width: 24 }}
            />
            <Typography variant="subtitle1" fontSize={18}>
              Film
            </Typography>
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Rubik Dirt",
              fontWeight: 400,
            }}
          >
            {billboardMovie?.title}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              mt: 2,
              maxWidth: "600px",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              mb: 2,
            }}
          >
            {billboardMovie?.overview}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "stretch",
              gap: 3,
              width: "100%",
              // backgroundColor: "wheat",
              maxWidth: "300px",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ flexGrow: 1 }}
              startIcon={<PlayArrowIcon fontSize="large" />}
            >
              Play
            </Button>
            <Button
              variant="contained"
              color="info"
              size="large"
              sx={{ flexGrow: 1 }}
              startIcon={<InfoOutlinedIcon fontSize="large" />}
            >
              More Info
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
