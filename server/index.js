// imports
const express = require("express");
const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());
require("dotenv").config();

// routes function

// routes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Starting server at http://localhost:${process.env.PORT}`);
});
