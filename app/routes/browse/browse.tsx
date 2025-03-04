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

export default function Browse() {
  const isMinMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

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
          minHeight: " 400px",
          position: "absolute",
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
            height: "100%",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 20%,rgba(0,0,0,0) 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
            zIndex: 999,
          },
        }}
      ></Box>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                gap: 3,
                alignItems: "center",
                zIndex: 1000,
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
    </Box>
  );
}
