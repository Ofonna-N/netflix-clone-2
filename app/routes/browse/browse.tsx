import type { NowPlayingMoviesResponse } from "~/types/now_playing_response";
import type { Route } from "./+types/browse";
import { isRouteErrorResponse } from "react-router";
import { Box, Typography } from "@mui/material";
import Billboard from "~/features/browse/components/billboard";
import "swiper/css";
import MoviesSlider from "~/components/movies_slider";
import type { MoviesResponse } from "~/types/movies_response";

export default function Browse({ loaderData }: Route.ComponentProps) {
  const nowPlayingMovies =
    loaderData?.props.nowPlayingMovies instanceof Error
      ? null
      : loaderData?.props.nowPlayingMovies;

  const popularMovies =
    loaderData?.props.popularMovies instanceof Error
      ? null
      : loaderData?.props.popularMovies;

  const topRatedMovies =
    loaderData?.props.topRatedMovies instanceof Error
      ? null
      : loaderData?.props.topRatedMovies;

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Billboard billboardMovies={nowPlayingMovies?.results ?? []} />
      <MoviesSlider title="Now Playing" movies={nowPlayingMovies?.results} />
      <MoviesSlider title="Popular" movies={popularMovies?.results} />
      <MoviesSlider title="Top Rated" movies={topRatedMovies?.results} />
    </Box>
  );
}

export async function clientLoader() {
  const baseUrl = "https://api.themoviedb.org/3/movie/";
  const requestOption: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      ["content-type"]: "application/json",
    },
  };
  let nowPlayingMoviesData: NowPlayingMoviesResponse | Error = new Error(
    "Error loading now playing movies"
  );
  let popularMoviesData: MoviesResponse | Error = new Error(
    "Error loading popular movies"
  );
  let topRatedMoviesData: MoviesResponse | Error = new Error(
    "Error loading top rated movies"
  );

  try {
    const nowPlayingMoviesRepsonse = await fetch(
      baseUrl + "now_playing?language=en-US&page=1",
      requestOption
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

  try {
    const popularMoviesRepsonse = await fetch(
      baseUrl + "popular?language=en-US&page=1",
      requestOption
    );
    if (popularMoviesRepsonse.ok) {
      popularMoviesData = await popularMoviesRepsonse.json();
    }
  } catch (err) {
    popularMoviesData = new Error("Error loading popular movies");
  }

  try {
    const topRatedMoviesResponse = await fetch(
      baseUrl + "top_rated?language=en-US&page=1",
      requestOption
    );
    if (topRatedMoviesResponse.ok) {
      topRatedMoviesData = await topRatedMoviesResponse.json();
    }
  } catch (err) {
    topRatedMoviesData = new Error("Error loading top rated movies");
  }

  return {
    props: {
      nowPlayingMovies: nowPlayingMoviesData,
      popularMovies: popularMoviesData,
      topRatedMovies: topRatedMoviesData,
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
