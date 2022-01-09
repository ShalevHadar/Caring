import React, { useEffect, useState } from "react";
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

export default function Home() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (text, teacher_id) => {
    navigate(`/${text}`, { state: teacher_id });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    if (validate(email)) {
      handleApi
        .post("/teacher/auth", { email, password })
        .then((res) => {
          const token = res.data.token;
          document.cookie = `token=${token}`;
          const teacher_id = res.data.teacher_id;
          handleLogin("dashboard", res.data.teacher_id);
        })
        .catch((err) => setError("Email/Password isn't valid"));
      setError("");
    } else {
      setError("Your email address isn't valid");
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
              <Typography sx={{ color: "red" }}>{error}</Typography>
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
