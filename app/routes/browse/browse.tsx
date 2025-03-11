import type { NowPlayingMoviesResponse } from "~/types/now_playing_response";
import type { Route } from "./+types/browse";
import { isRouteErrorResponse } from "react-router";
import { Box, Button, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Billboard from "~/features/browse/components/billboard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import favicon from "~/assets/favicon.svg";

const CustomSwiperSlide = styled(SwiperSlide)({
  position: "relative",
  backgroundColor: "wheat",
  width: "300px !important",
  height: "150px !important",
});

export default function Browse({ loaderData }: Route.ComponentProps) {
  const nowPlayingMovies =
    loaderData?.props.nowPlayingMovies instanceof Error
      ? null
      : loaderData?.props.nowPlayingMovies;

  const [billboardMovie, setBillboardMovie] = useState<
    NowPlayingMoviesResponse["results"][number] | undefined
  >(nowPlayingMovies?.results?.[0] ?? undefined);

  const [swiper, setSwiper] = useState<ReturnType<typeof useSwiper> | null>(
    null
  );

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
          width: "95%",
          // height: "150px",
          position: "relative",
          zIndex: 1000,
          mx: "auto",
          px: 4,
        }}
      >
        <Typography variant="h2" mb={2}>
          Now Playing
        </Typography>
        <Box
          component={Swiper}
          className="mySwiper"
          slidesPerView={"auto"}
          spaceBetween={10}
          loop
          centeredSlides
          sx={{
            position: "relative",
          }}
          onSwiper={setSwiper}
        >
          {nowPlayingMovies?.results?.map((movie) => {
            return (
              <CustomSwiperSlide>
                <Box
                  component={"img"}
                  src={
                    import.meta.env.VITE_TMBD_API_IMAGE_URL +
                    movie.backdrop_path
                  }
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
                  component={"img"}
                  alt="icon"
                  src={favicon}
                  sx={{
                    width: 24,
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 1000,
                  }}
                />
              </CustomSwiperSlide>
            );
          })}
        </Box>
        <Box
          sx={{
            position: "absolute",
            // top: "50%",
            bottom: "0",
            left: "0",
            // transform: "translateY(-50%)",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
            height: "150px",
          }}
        >
          <Button
            variant="contained"
            color="info"
            sx={{
              height: "100%",
              px: "0px",
              minWidth: 0,
              alignSelf: 1,
              // backgroundColor: "wheat",
            }}
            onClick={() => swiper?.slidePrev()}
          >
            <KeyboardArrowLeftIcon />
          </Button>
          <Button
            variant="contained"
            color="info"
            sx={{
              height: "100%",
              px: "0px",
              minWidth: 0,
              alignSelf: 1,
              // backgroundColor: "wheat",
            }}
            onClick={() => swiper?.slideNext()}
          >
            <KeyboardArrowRightIcon />
          </Button>
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
