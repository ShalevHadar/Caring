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
import axios from "axios";
import { myTheme } from "../components/myTheme";
import { validate } from "../components/validate";

export default function Home() {
  const [error, setError] = useState("");
  // const URL = `http://localhost:3030/api/users/login`;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    if (validate(email)) {
      console.log("ok");
      setError("");
    } else {
      setError("Your email address isn't valid");
    }
    // axios
    //   .post(URL, { email: data.get("email"), password: data.get("password") })
    //   .then((res) => {
    //     if (!res.data) {
    //       console.log(res.data);
    //     } else {
    //       const token = res.data.token;
    //       document.cookie = `token=${token}`;
    //       navigate("../items");
    //     }
    //   })
    //   .catch((error) => console.log(error.massage));
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
