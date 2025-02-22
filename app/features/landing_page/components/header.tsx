import {
  Box,
  Container,
  InputAdornment,
  Link,
  MenuItem,
  TextField,
} from "@mui/material";

import TranslateIcon from "@mui/icons-material/Translate";
import { Link as RouterLink } from "react-router";
import Logo from "~/components/logo";

export default function Header() {
  return (
    <Box
      component={"header"}
      sx={{
        zIndex: 5,
      }}
    >
      <Container
        sx={{
          padding: "1em",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Logo />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1em",
            alignItems: "center",
          }}
        >
          <TextField
            select
            size="small"
            defaultValue={"English"}
            sx={{
              minWidth: "150px",
            }}
            color="secondary"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <TranslateIcon fontSize={"small"} />
                  </InputAdornment>
                ),
              },
            }}
          >
            {["English", "Spanish"].map((language) => {
              return (
                <MenuItem key={language} value={language}>
                  {language}
                </MenuItem>
              );
            })}
          </TextField>
          <Link
            component={RouterLink}
            to="login"
            underline="none"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              padding: "0.35em 1em",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Sign In
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
