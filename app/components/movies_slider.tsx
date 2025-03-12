import { Box, Button, styled, Typography } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import favicon from "~/assets/favicon.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import type { Movie } from "~/types/movie";

const CustomSwiperSlide = styled(SwiperSlide)({
  position: "relative",
  backgroundColor: "wheat",
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
        // height: "150px",
        position: "relative",
        zIndex: 1000,
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
        }}
        onSwiper={setSwiper}
      >
        {movies?.map((movie) => {
          return (
            <CustomSwiperSlide>
              <Box
                component={"img"}
                src={
                  import.meta.env.VITE_TMBD_API_IMAGE_URL_500 +
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
      {movies && movies.length > 0 && (
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
      )}
    </Box>
  );
}
