// imports
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mySql = require("./mysql/client");
const authRoutes = require("./Auth/routes");
const incidentRoutes = require("./incidents/routes");
const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use(incidentRoutes);

// connection to mysql server
mySql.connect((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Starting server at http://localhost:${port}`);
    });
  } else {
    throw new Error("Can't connect to the server");
  }
});

// listening
