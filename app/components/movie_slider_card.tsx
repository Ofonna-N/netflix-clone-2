import { Box, Card, CardContent, Popover, Typography } from "@mui/material";
import { useRef, useState } from "react";
import type { Movie } from "~/types/movie";
import favicon from "~/assets/favicon.svg";

type Props = {
  movie: Movie;
};

export default function MovieSliderCard(props: Props) {
  const { movie } = props;

  const isHoveringRef = useRef(false);
  const [showContent, setShowContent] = useState(false);
  const imgAnchorElementRef = useRef<HTMLImageElement>(null);

  return (
    <Box
      component={"div"}
      ref={imgAnchorElementRef}
      sx={{
        backgroundColor: "wheat",
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
      onPointerEnter={() => {
        isHoveringRef.current = true;
        setTimeout(() => {
          if (isHoveringRef.current) {
            setShowContent(true);
          }
        }, 500);
      }}
      onPointerLeave={() => {
        isHoveringRef.current = false;
      }}
    >
      <Box
        component={"img"}
        src={
          import.meta.env.VITE_TMBD_API_IMAGE_URL_500 +
          (movie.backdrop_path ?? movie.poster_path)
        }
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: "0",
          left: "0",
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
          zIndex: 300,
        }}
      />
      <Popover
        open={showContent}
        onClose={() => {
          setShowContent(false);
          isHoveringRef.current = false;
        }}
        anchorEl={imgAnchorElementRef.current}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            onPointerLeave: () => {
              setShowContent(false);
              isHoveringRef.current = false;
            },
          },
        }}
        closeAfterTransition
      >
        <Card
          sx={{
            position: "relative",
            width: "400px",
          }}
        >
          <Box
            component={"img"}
            src={
              import.meta.env.VITE_TMBD_API_IMAGE_URL +
              (movie.backdrop_path ?? movie.poster_path)
            }
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              maxHeight: "400px",
              top: "0",
              left: "0",
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
              zIndex: 300,
            }}
          />
          <CardContent
            sx={{
              position: "relative",
              zIndex: 10000,
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {movie.title ?? movie.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                maxHeight: "100px",
                overflow: "auto",
              }}
            >
              {movie.overview}
            </Typography>
          </CardContent>
        </Card>
      </Popover>
    </Box>
  );
}
