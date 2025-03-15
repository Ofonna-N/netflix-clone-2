import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  Paper,
} from "@mui/material";
import squidGameTitle from "~/assets/squid game title.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";

const metaData = ["2025", "TV-MA", "Show", "Thrillers, Dramas"];
type Props = {
  openDialog: boolean;
  openDialogHanlder: (open: boolean) => void;
};
export default function SquidGameDialog(props: Props) {
  const { openDialog, openDialogHanlder } = props;
  const navigate = useNavigate();
  return (
    <Dialog
      closeAfterTransition
      open={openDialog}
      onClose={() => openDialogHanlder(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      sx={{ zIndex: 100000 }}
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
          },
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <Box
          sx={{
            height: "400px",
            width: "100%",
            backgroundColor: "wheat",
            position: "relative",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              zIndex: 100,
            }}
            onClick={() => openDialogHanlder(false)}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <Box
            component={"img"}
            src="https://occ-0-853-851.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABVV9gbt3EJsyDMLSD-0Jk01mW5lvHJX1STWaCA0VYXvolLOLAtSc3ufX4YLlJUFrL3QIzieFK_1tQJGhJbPCKqElfp48VWpHAjyx.webp?r=513"
            alt="banner"
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              top: 0,
              left: 0,
            }}
          />
          <Box
            component={"img"}
            src={squidGameTitle}
            alt="title"
            sx={{
              position: "absolute",
              width: "200px",
              // aspectRatio: "25/14",
              objectFit: "cover",
              bottom: 0,
              left: 20,
              zIndex: 10000,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `linear-gradient(40deg, #161616 24.16%, rgba(6, 10, 23, 0) 56.61%), 
                linear-gradient(0deg, rgb(22, 22, 22) 3.91%, rgba(6, 10, 23, 0) 69.26%)`,
              },
            }}
          ></Box>
        </Box>
        <DialogContentText
          component={"div"}
          id="alert-dialog-description"
          sx={{ p: 3, backgroundColor: "#161616" }}
        >
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            {metaData.map((data, index) => {
              return (
                <Paper
                  key={index}
                  sx={{ p: 0.5, bgcolor: "#414141", fontSize: "14px" }}
                  elevation={0}
                >
                  {data}
                </Paper>
              );
            })}
          </Box>
          Hundreds of cash-strapped players accept a strange invitation to
          compete in children's games. Inside, a tempting prize awaits — with
          deadly high stakes.
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "flex-start",
          bgcolor: "#161616",
          px: 3,
          pb: 3,
        }}
      >
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => navigate("/login")}
        >
          Get Started
        </Button>
      </DialogActions>
    </Dialog>
  );
}
