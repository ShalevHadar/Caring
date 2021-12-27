// imports
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();
const port = process.env.PORT;

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/send", (req, res) => {
  const { email } = req.body;
  console.log(email);
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

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(404).send({ message: error.message });
    } else {
      console.log(info);
      res.status(200).send({ message: "well done ! email sent" });
    }
  });
});

app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}`);
});
