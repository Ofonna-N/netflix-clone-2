import { Box, Button, Typography } from "@mui/material";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import favicon from "~/assets/favicon.svg";
import type { Movie } from "~/types/movie";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  billboardMovies: Movie[] | undefined;
};

export default function Billboard(props: Props) {
  const { billboardMovies } = props;

  const [motionRef] = useAnimate<HTMLDivElement>();

  const [billboardMovie, setBillboardMovie] = useState(
    billboardMovies?.[0] ?? undefined
  );

  // Randomly select a movie from the list of billboard movies every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(
        Math.random() * (billboardMovies?.length ?? 0)
      );
      setBillboardMovie(billboardMovies?.[randomIndex]);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  });

  // Animate the billboard movie title
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
        minHeight: "614px",
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
          zIndex: 150,
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
          zIndex: 150,
        },
      }}
    >
      <Box
        component={"img"}
        src={
          import.meta.env.VITE_TMBD_API_IMAGE_URL +
          (billboardMovie?.backdrop_path ??
            billboardMovies?.find((movie) => !!movie.backdrop_path)
              ?.backdrop_path)
        }
        alt={billboardMovie?.title ?? billboardMovie?.name}
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
            zIndex: 200,
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
              startIcon={<PlayArrow fontSize="large" />}
            >
              Play
            </Button>
            <Button
              variant="contained"
              color="info"
              size="large"
              sx={{ flexGrow: 1 }}
              startIcon={<InfoOutlined fontSize="large" />}
            >
              More Info
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
