import type { NowPlayingMoviesResponse } from "~/types/now_playing_response";
import type { Route } from "./+types/browse";
import { isRouteErrorResponse } from "react-router";
import { Box, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Billboard from "~/features/browse/components/billboard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CustomSwiperSlide = styled(SwiperSlide)({});

export default function Browse({ loaderData }: Route.ComponentProps) {
  const nowPlayingMovies =
    loaderData?.props.nowPlayingMovies instanceof Error
      ? null
      : loaderData?.props.nowPlayingMovies;

  const [billboardMovie, setBillboardMovie] = useState<
    NowPlayingMoviesResponse["results"][number] | undefined
  >(nowPlayingMovies?.results?.[0] ?? undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(
        Math.random() * (nowPlayingMovies?.results?.length ?? 0)
      );
      setBillboardMovie(nowPlayingMovies?.results?.[randomIndex]);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Billboard billboardMovie={billboardMovie} />
      <Box
        sx={{
          width: "100%",
          height: "150px",
          position: "relative",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          px: 4,
        }}
      >
        <Box component={Swiper} className="mySwiper">
          <CustomSwiperSlide>Slide 1</CustomSwiperSlide>
          <CustomSwiperSlide>Slide 2</CustomSwiperSlide>
          <CustomSwiperSlide>Slide 3</CustomSwiperSlide>
          <CustomSwiperSlide>Slide 4</CustomSwiperSlide>
          <CustomSwiperSlide>Slide 5</CustomSwiperSlide>
          <CustomSwiperSlide>Slide 6</CustomSwiperSlide>
          <CustomSwiperSlide>Slide 7</CustomSwiperSlide>
          <CustomSwiperSlide>Slide 8</CustomSwiperSlide>
          <CustomSwiperSlide>Slide 9</CustomSwiperSlide>
        </Box>
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
