import { Box, Button, Typography } from "@mui/material";
import profilePicPlaceholder from "~/assets/placeholder-profile.png";
import kidsProfilePicPlaceholder from "~/assets/placeholder-kids-profile.png";
import SelectAccountProfile from "./select_account_profile";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useAuthContext from "~/hooks/use_auth_context";

export default function SelectAccountView() {
  const authContext = useAuthContext();
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.paper",
        ":before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.79), rgba(0, 0, 0, 0) 7%)",
        },
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{ mb: 4, fontWeight: 400, textAlign: "center" }}
        >
          Who's watching?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <SelectAccountProfile
            textProps={{ label: "Demo User" }}
            ButtonBaseProps={{
              onClick: () => {
                authContext.toggleUserAccount();
              },
            }}
          >
            <Box
              component={"img"}
              src={profilePicPlaceholder}
              alt="your profile"
              sx={{
                position: "absolute",
                width: "100%",
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
          </SelectAccountProfile>
          <SelectAccountProfile
            textProps={{ label: "Kids" }}
            ButtonBaseProps={{
              onClick: () => {
                authContext.toggleUserAccount();
              },
            }}
          >
            <Box
              component={"img"}
              src={kidsProfilePicPlaceholder}
              alt="kids profile"
              sx={{
                position: "absolute",
                width: "100%",
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
          </SelectAccountProfile>
          <SelectAccountProfile
            ButtonBaseProps={{
              sx: {
                position: "relative",
                borderRadius: 1,
                ":hover": {
                  backgroundColor: "rgb(233, 233, 233)",
                  "& span": {
                    opacity: 1,
                  },
                },
              },
            }}
            textProps={{ label: "Add Profile" }}
          >
            <Box sx={{ position: "relative", zIndex: 100000 }}>
              <AddCircleIcon
                sx={{
                  width: "60%",
                  height: "60%",
                  color: "grey",
                  zIndex: 100000,
                }}
                fontSize="large"
              />
            </Box>
          </SelectAccountProfile>
        </Box>
        <Box
          sx={{
            mt: 8,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            color="info"
            sx={{
              // mx: "auto",
              borderRadius: 0,
              borderWidth: 2,
            }}
          >
            Manage Profiles
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
