import { Box, Button, styled, Typography } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import type { Movie } from "~/types/movie";
import MovieSliderCard from "./movie_slider_card";

const CustomSwiperSlide = styled(SwiperSlide)({
  position: "relative",
  width: "300px !important",
  height: "150px !important",
});

type Props = {
  title: string;
  movies: Movie[] | undefined;
};

export default function MoviesSlider(props: Props) {
  const { movies, title } = props;

  const [swiper, setSwiper] = useState<ReturnType<typeof useSwiper> | null>(
    null
  );
  return (
    <Box
      sx={{
        width: "95%",
        position: "relative",
        zIndex: 1,
        mx: "auto",
        px: 4,
        mb: 4,
      }}
    >
      <Typography variant="h3" mb={2}>
        {title}
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
          maxHeight: "150px",
        }}
        onSwiper={setSwiper}
      >
        {movies?.map((movie) => {
          return (
            <CustomSwiperSlide
              key={movie.id}
              sx={{
                maxHeight: "150px",
              }}
            >
              <MovieSliderCard movie={movie} />
            </CustomSwiperSlide>
          );
        })}
      </Box>
      {movies && movies.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
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
            }}
            onClick={() => swiper?.slidePrev()}
          >
            <KeyboardArrowLeft />
          </Button>
          <Button
            variant="contained"
            color="info"
            sx={{
              height: "100%",
              px: "0px",
              minWidth: 0,
              alignSelf: 1,
            }}
            onClick={() => swiper?.slideNext()}
          >
            <KeyboardArrowRight />
          </Button>
        </Box>
      )}
    </Box>
  );
}
