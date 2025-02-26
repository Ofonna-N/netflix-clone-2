import {
  alpha,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { blue } from "@mui/material/colors";

export default function LoginForm() {
  const backgroundColor = useTheme().palette.background.default;
  return (
    <Paper
      sx={{
        py: 4,
        px: 6,
        mt: 8,
        pb: 10,
        maxWidth: "450px",
        backgroundColor: alpha(backgroundColor, 0.7),
        position: "relative",
        "::before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: alpha(backgroundColor, 0.5),
          zIndex: 3,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          zIndex: 5,
          gap: 2,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ mb: 1, zIndex: 10, position: "relative" }}
        >
          Sign In
        </Typography>
        <TextField
          fullWidth
          placeholder="Email or phone number"
          label="Email or phone number"
          variant="outlined"
          color="secondary"
        />
        <TextField
          fullWidth
          placeholder="Password"
          label="Password"
          variant="outlined"
          type="password"
          color="secondary"
        />
        <Button variant="contained" size="large">
          Sign In
        </Button>
        <Typography sx={{ textAlign: "center" }}>OR</Typography>
        <Button variant="contained" size="large" color="info">
          Use a Sign-In Code
        </Button>
        <Link
          href="#"
          color="primary.contrastText"
          sx={{ textAlign: "center" }}
        >
          Forgot password?
        </Link>
        <FormControlLabel
          control={<Checkbox defaultChecked color="secondary" />}
          label="Remember me"
        />
        <Typography color={alpha("#ffffff", 0.55)}>
          New to Netflix?{" "}
          <Link href="#" color="primary.contrastText" underline="none">
            Sign up now.
          </Link>
        </Typography>
        <Typography color={alpha("#ffffff", 0.55)} variant="caption">
          This page is protected by Stroodle reCAPTCHA to ensure you're not a
          bot.{" "}
        </Typography>
        <Link href="#" color={blue[800]} fontSize={12}>
          Learn more.
        </Link>
      </Box>
    </Paper>
  );
}
