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

app.post("/api/getPin", (req, res) => {
  const { email } = req.body;

  mysqlConnection.query(
    `SELECT * FROM students WHERE email = '${email}'`,
    (err, results, field) => {
      if (results.length === 1) {
        const [{ pincode, firstname }] = results;
        res.status(200).json({ pincode, firstname });
      } else {
        res.status(404).json("email was not found");
      }
    }
  );
});

app.post("/api/createPinByEmail", (req, res) => {
  const { email } = req.body;
  mysqlConnection.query(
    `SELECT * FROM students WHERE email = '${email}'`,
    (err, results, field) => {
      //console.log(results);
      if (results) {
        const pin = generatePin();
        modifyUserPin(email, pin);
        res.status(200).json(results);
      } else {
        res.status(404).json("email was not found");
      }
    }
  );
});

app.post("/api/sendEmail", (req, res) => {
  const { email } = req.body;
  mysqlConnection.query(
    `SELECT pincode FROM students WHERE email = '${email}'`,
    (err, results, field) => {
      if (results) {
        const [{ pincode }] = results;
        sendEmailFunction(email, pincode);
        res.status(200).json(results);
      } else {
        res.status(404).json("pin");
      }
    }
  );
});

const generatePin = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

const modifyUserPin = (email, pin) => {
  mysqlConnection.query(
    `UPDATE students SET pincode = ${pin} WHERE email = '${email}'`,
    (err, results, field) => {
      if (err) {
        return err.message;
      }
    }
  );
};

const sendEmailFunction = (email, pincode) => {
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
    text: `Hi there ! \n this is your pincode please insert it: \n ${pincode}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(404).send({ message: error.message });
    }
  });
};

app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}`);
});
