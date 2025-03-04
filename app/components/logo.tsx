import { Box, type BoxProps } from "@mui/material";
import LogoSvg from "~/assets/flixclonev1.svg";

type Props = {
  logoProps?: BoxProps;
};
export default function Logo(props: Props) {
  const { sx, ...otherBoxProps } = props.logoProps ?? {};
  return (
    <Box
      {...otherBoxProps}
      component={"img"}
      src={LogoSvg}
      alt="Logo"
      sx={{
        ...sx,
        width: (sx as any)?.width
          ? { ...((sx as any)?.width as any) }
          : {
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
