import type { Route } from "./+types/browse";
import { isRouteErrorResponse } from "react-router";
import { Box, Typography } from "@mui/material";
import Billboard from "~/features/browse/components/billboard";
import "swiper/css";
import MoviesSlider from "~/components/movies_slider";
import MoviesApiClient from "~/features/browse/api/movies_api_client";

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

  const trendingMovies =
    loaderData?.props.trendingMovies instanceof Error
      ? null
      : loaderData?.props.trendingMovies;

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Billboard billboardMovies={nowPlayingMovies?.results ?? []} />
      <Box
        sx={{
          position: "relative",
          zIndex: 800,
          width: "100%",
        }}
      >
        <MoviesSlider title="Trending" movies={trendingMovies?.results} />
        <MoviesSlider title="Now Playing" movies={nowPlayingMovies?.results} />
        <MoviesSlider title="Top Rated" movies={topRatedMovies?.results} />
        <MoviesSlider title="Popular" movies={popularMovies?.results} />
      </Box>
    </Box>
  );
}

export async function loader() {
  const baseUrl = process.env.TMBD_MOVIEDB_BASE_URL!;
  const moviesAipClient = new MoviesApiClient(baseUrl);

  let nowPlayingMoviesData = await moviesAipClient.fetchMovies({
    endpoint: "movie/now_playing?language=en-US&page=1",
    errMsgTitle: "Now Playing",
  });

  let popularMoviesData = await moviesAipClient.fetchMovies({
    endpoint: "movie/popular?language=en-US&page=1",
    errMsgTitle: "Popular",
  });

  let topRatedMoviesData = await moviesAipClient.fetchMovies({
    endpoint: "movie/top_rated?language=en-US&page=1",
    errMsgTitle: "Top Rated",
  });

  let trendingMoviesData = await moviesAipClient.fetchMovies({
    endpoint: "trending/all/day?language=en-US",
    errMsgTitle: "Trending",
  });

  return {
    props: {
      nowPlayingMovies: nowPlayingMoviesData,
      popularMovies: popularMoviesData,
      topRatedMovies: topRatedMoviesData,
      trendingMovies: trendingMoviesData,
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
