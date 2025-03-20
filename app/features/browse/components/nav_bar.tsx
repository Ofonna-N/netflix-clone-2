import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Logo from "~/components/logo";
import browseNavLinks from "~/features/browse/constants/browse_navlinks";
import DropdownMenu from "~/features/browse/components/dropdown_menu";
import { Link as RouterLink } from "react-router";
import useAnimateOnWindowScroll from "../hooks/use_animate_on_window_scroll";

export default function NavBar() {
  const isMinMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const [appBarRef] = useAnimateOnWindowScroll({
    scrollThreshold: 150,
    aboveThresholdKeyFrames: {
      backgroundColor: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"],
    },
    belowThresholdKeyframes: {
      backgroundColor: ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"],
    },
  });

  return (
    <AppBar
      ref={appBarRef}
      position="fixed"
      color="transparent"
      sx={{ boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              gap: 3,
              alignItems: "center",
              zIndex: 300,
            }}
          >
            <Link component={RouterLink} to="/browse">
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
            </Link>
            {!isMinMd ? (
              <DropdownMenu />
            ) : (
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
                    sx={{
                      ":hover": {
                        opacity: 0.7,
                      },
                    }}
                  >
                    {navLink.label}
                  </Link>
                ))}
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
