import { Box } from "@mui/material";
import LogoSvg from "~/assets/flixclonev1.svg";

export default function Logo() {
  return (
    <Box
      component={"img"}
      src={LogoSvg}
      alt="Logo"
      sx={{
        width: {
          xs: "100px",
          sm: "150px",
          md: "180px",
          lg: "200px",
        },
        transform: "translateY(5px)",
      }}
    />
  );
}
