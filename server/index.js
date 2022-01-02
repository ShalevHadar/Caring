// imports
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const dbClient = require("./Mysql/client");
const authRoutes = require("./Auth/routes");
const incidentRoutes = require("./Incidents/routes");
const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use(incidentRoutes);

// connection to mysql server
dbClient.connect((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Starting server at http://localhost:${port}`);
    });
  } else {
    throw new Error("Can't connect to the server");
  }
});
