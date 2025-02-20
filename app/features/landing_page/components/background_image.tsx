import { Box } from "@mui/material";

export default function BackgroundImage() {
  return (
    <Box
      component={"img"}
      src={
        "https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/US-en-20250210-TRIFECTA-perspective_5cc3f8aa-0c98-40f5-96f7-ac7e4af57d4a_medium.jpg"
      }
      alt="hero image"
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        objectFit: "cover",
        objectPosition: "center",
        zIndex: 1,
      }}
    />
  );
}
