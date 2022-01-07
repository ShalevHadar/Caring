import React from "react";
import "@fontsource/roboto/400.css";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (text) => {
    navigate(`/${text}`);
  };

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        //style={{ minHeight: '100vh' }}
        sx={{ pt: 18 }}
      >
        <Grid item>
          <Typography variant="h2" textAlign="center" sx={{ p: 1 }}>
            Welcome to Caring
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ p: 2 }}>
            Please Sign in or contact your principle to create a user
          </Typography>
          <Box textAlign="center" sx={{ pt: 5 }}>
            <Button
              variant="contained"
              style={Styles.buttonStyle}
              size="large"
              onClick={() => handleClick("login")}
            >
              <Typography>Sign in</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

const Styles = {
  buttonStyle: {
    textTransform: "none",
    backgroundColor: "#7a6c5d",
    minWidth: 170,
  },
};
