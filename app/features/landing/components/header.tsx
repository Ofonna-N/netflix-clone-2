import { Box, Button, Container, MenuItem, TextField } from "@mui/material";
import Logo from "public/flixclonev1.svg";

export default function Header() {
  return (
    <Box component={"header"}>
      <Container
        sx={{
          padding: "1em",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          component={"img"}
          src={Logo}
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

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1em",
          }}
        >
          <TextField
            select
            size="small"
            defaultValue={"English"}
            sx={{
              minWidth: "150px",
            }}
          >
            {["English", "Spanish", "French"].map((language) => {
              return (
                <MenuItem key={language} value={language}>
                  {language}
                </MenuItem>
              );
            })}
          </TextField>
          <Button variant="contained">Sign In</Button>
        </Box>
      </Container>
    </Box>
  );
}
