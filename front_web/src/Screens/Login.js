import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { myTheme } from "../components/myTheme";
import { validate } from "../components/validate";
import handleApi from "../api/handleApi";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const handleLogin = (text, teacher_id) => {
    navigate(`/${text}`, { state: teacher_id });
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    if (validate(email)) {
      handleApi
        .post("/teacher/auth", { email, password })
        .then((res) => {
          setLoading(false);
          const token = res.data.token;
          document.cookie = `token=${token}`;
          handleLogin("dashboard", res.data.teacher_id);
        })
        .catch((err) => {
          setLoading(false);
          setErr("Email/Password isn't valid");
        });
      setErr("");
    } else {
      setLoading(false);
      setErr("Your email address isn't valid");
    }
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#7a6c5d" }}>
            <AccessibilityIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box textAlign="center" sx={{ pt: 1 }}>
              <Typography sx={{ color: "red" }}>
                {loading ? <CircularProgress /> : err}
              </Typography>
            </Box>
            <Box textAlign="center" sx={{ pt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                style={Styles.buttonStyle}
                size="large"
              >
                <Typography>Sign in</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const Styles = {
  buttonStyle: {
    textTransform: "none",
    backgroundColor: "#7a6c5d",
    minWidth: 170,
  },
};
