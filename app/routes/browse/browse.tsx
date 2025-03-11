import type { NowPlayingMoviesResponse } from "~/types/now_playing_response";
import type { Route } from "./+types/browse";
import { isRouteErrorResponse } from "react-router";
import { Box, Typography } from "@mui/material";
import Billboard from "~/features/browse/components/billboard";
import "swiper/css";
import MoviesSlider from "~/components/movies_slider";

export default function Browse({ loaderData }: Route.ComponentProps) {
  const nowPlayingMovies =
    loaderData?.props.nowPlayingMovies instanceof Error
      ? null
      : loaderData?.props.nowPlayingMovies;

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Billboard billboardMovies={nowPlayingMovies?.results ?? []} />
      <MoviesSlider title="Now Playing" movies={nowPlayingMovies?.results} />
      <MoviesSlider title="Now Playing" movies={nowPlayingMovies?.results} />
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
