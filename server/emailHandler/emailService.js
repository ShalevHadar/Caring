const nodemailer = require("nodemailer");

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

module.exports = {
  sendEmailFunction,
};
