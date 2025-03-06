import { Box } from "@mui/material";
export default function Browse() {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "royalblue",
          minHeight: "400px",
          maxHeight: "800px",
          position: "relative",
          top: "0",
          left: "0",
          aspectRatio: "16/9",
          "::before": {
            content: "''",
            display: "block",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "400px",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 20%,rgba(0,0,0,0) 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
            zIndex: 999,
          },
        }}
      ></Box>
      <Box sx={{ bgcolor: "wheat" }}>Test section</Box>
    </Box>
  );
}
