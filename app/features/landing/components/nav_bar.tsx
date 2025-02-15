import { Box, Button, Container, MenuItem, TextField } from "@mui/material";
import Logo from "public/flixclonev1.svg";

export default function NavBar() {
  return (
    <Box component={"nav"}>
      <Container
        sx={{
          padding: "1em",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component={"img"}
          src={Logo}
          alt="Logo"
          sx={{
            width: "100px",
            transform: "translateY(5px)",
          }}
        />

        <Box
          sx={{
            display: "flex",
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
