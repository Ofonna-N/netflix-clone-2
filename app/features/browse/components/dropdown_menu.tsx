import { Link, MenuItem, Popover } from "@mui/material";
import { Link as RouterLink } from "react-router";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import browseNavLinks from "~/features/browse/constants/browse_navlinks";

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null);
  return (
    <>
      <Link
        color="secondary"
        underline="none"
        component={RouterLink}
        to={"/browse"}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        onPointerEnter={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      >
        Browse
        <ArrowDropDownIcon />
      </Link>
      <Popover
        id={"browse-popover"}
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            square: true,
            sx: {
              mt: 2,
              borderTop: "2px solid white",
              backgroundColor: "black",
            },
            onPointerLeave: () => {
              setAnchorEl(null);
            },
          },
        }}
      >
        {browseNavLinks.map((navLink) => {
          return (
            <MenuItem
              key={navLink.label}
              sx={{
                textAlign: "center",
                py: 1.5,
                justifyContent: "center",
              }}
            >
              {navLink.label}
            </MenuItem>
          );
        })}
      </Popover>
    </>
  );
}
