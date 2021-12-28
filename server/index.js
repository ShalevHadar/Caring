// imports
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const mysql = require("mysql2");

// middleware
app.use(express.json());
app.use(cors());

const mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("connection start");
  } else {
    console.log("connection failed");
  }
});

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/send", (req, res) => {
  const { email } = req.body;

  mysqlConnection.query(
    `SELECT * FROM students WHERE email = '${email}'`,
    (err, results, field) => {
      console.log(results);
      if (results.length === 1) {
        res.status(200).json(results);
      } else {
        res.status(404).json("email was not found");
      }
    }
  );

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.EMAIL_USER}`,
      pass: `${process.env.EMAIL_PASSWORD}`,
    },
  });

  var mailOptions = {
    from: "Your best friend",
    to: `${email}`,
    subject: "Hey ! this is your pin code for Caring",
    text: "That was easy!",
  };

  // transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     res.status(404).send({ message: error.message });
  //   } else {
  //     console.log(info);
  //     res.status(200).send({ message: "well done ! email sent" });
  //   }
  // });
});

app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}`);
});
