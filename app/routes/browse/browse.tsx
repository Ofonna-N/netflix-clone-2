import { AppBar, Box, Container, Link, Toolbar } from "@mui/material";
import Logo from "~/components/logo";

const browseNavLinks = [
  { label: "Home", path: "/" },
  { label: "TV Shows", path: "/tv-shows" },
  { label: "Movies", path: "/movies" },
  { label: "New & Popular", path: "/new-and-popular" },
  { label: "My List", path: "/my-list" },
  { label: "Browse by Languages", path: "/browse-by-languages" },
];

export default function Browse() {
  return (
    <Box>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
              }}
            >
              <Logo
                logoProps={{
                  sx: {
                    width: {
                      xs: "100px",
                      sm: "150px",
                    },
                  },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                {browseNavLinks.map((navLink) => (
                  <Link
                    key={navLink.label}
                    color="secondary"
                    href="#"
                    underline="none"
                    fontSize={"0.9rem"}
                  >
                    {navLink.label}
                  </Link>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
