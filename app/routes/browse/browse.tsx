import type { NowPlayingMoviesResponse } from "~/types/now_playing_response";
import type { Route } from "./+types/browse";
import { isRouteErrorResponse } from "react-router";
import { Box, Button, Typography } from "@mui/material";
import favicon from "~/assets/favicon.svg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useMemo } from "react";

const baseURL = "https://image.tmdb.org/t/p/original/";

export default function Browse({ loaderData }: Route.ComponentProps) {
  console.log("loaderData?.props", loaderData?.props);
  const nowPlayingMovies =
    loaderData?.props.nowPlayingMovies instanceof Error
      ? null
      : loaderData?.props.nowPlayingMovies;

  console.log(
    "nowPlayingMovies",
    nowPlayingMovies?.results?.[0].title.split(" ")[0]
  );

  const billboardMovie = useMemo(() => {
    return nowPlayingMovies?.results?.[8];
  }, [nowPlayingMovies]);
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
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
              position: "relative",
              zIndex: 1000,
              mt: 20,
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
      <Box
        sx={{
          width: "100%",
          height: "150px",
          bgcolor: "wheat",
          // transform: "translateY(-20px)",
          position: "relative",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          px: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: "violet",
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>Test</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export async function clientLoader() {
  let nowPlayingMoviesData: NowPlayingMoviesResponse | Error = new Error(
    "Error loading now playing movies"
  );

  try {
    const nowPlayingMoviesRepsonse = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
          ["content-type"]: "application/json",
        },
      }
    );

    if (nowPlayingMoviesRepsonse.ok) {
      nowPlayingMoviesData = await nowPlayingMoviesRepsonse.json();
    } else {
      nowPlayingMoviesData = new Error("Error loading now playing movies");
    }
  } catch (err) {
    console.error(err);
    nowPlayingMoviesData = new Error("Error loading now playing movies");
  }

  return {
    props: {
      nowPlayingMovies: nowPlayingMoviesData,
    },
  };
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <Box pt={10} px={2}>
          <Typography variant="h1">
            {error.status} {error.statusText}
          </Typography>
          <Typography>{error.data}</Typography>
        </Box>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <Box pt={10} px={2}>
        <Typography variant="h1">Error</Typography>
        <Typography>{error.message}</Typography>
        <Typography>The stack trace is:</Typography>
        <Typography component={"pre"}>{error.stack}</Typography>
      </Box>
    );
  } else {
    return (
      <Typography variant="h1" py={10} px={2}>
        Unknown Error
      </Typography>
    );
  }
}
