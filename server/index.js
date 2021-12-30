// imports
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/routes");
const mySql = require("./mysql/config");
const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());
app.use(routes);

// connection to mysql server
mySql.connect((err) => {
  if (!err) {
    console.log("connection start");
  } else {
    console.log("connection failed");
  }
});

// listening

app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}`);
});
