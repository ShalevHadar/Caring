const nodemailer = require("nodemailer");
const mySql = require("../mysql/config");
require("dotenv").config();

// helper functions
const generatePin = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

const modifyUserPin = (email, pin) => {
  mySql.query(
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

// handlers
const createPin = (req, res) => {
  const { email } = req.body;
  mySql.query(
    `SELECT * FROM students WHERE email = '${email}'`,
    (err, results, field) => {
      //console.log(results);
      if (results.length == 1) {
        const pin = generatePin();
        modifyUserPin(email, pin);
        res.status(200).json(results);
      } else {
        res.status(404).json("email was not found");
      }
    }
  );
};

const sendEmail = (req, res) => {
  const { email } = req.body;
  mySql.query(
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
};

const getPin = (req, res) => {
  const { email } = req.body;
  mySql.query(
    `SELECT * FROM students WHERE email = '${email}'`,
    (err, results, field) => {
      if (results.length === 1) {
        const [{ pincode, firstname, class_id }] = results;
        res.status(200).json({ pincode, firstname, class_id });
      } else {
        res.status(404).json("email was not found");
      }
    }
  );
};

exports.createPin = createPin;
exports.sendEmail = sendEmail;
exports.getPin = getPin;
