const nodemailer = require("nodemailer");
const { pincodeEmailOptions } = require("./pincodeEmailOptions");

//
const sendEmail = (data) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.EMAIL_USER}`,
      pass: `${process.env.EMAIL_PASSWORD}`,
    },
  });

  //
  if (data.message == "sendPincode") {
    const dataObj = {
      pincode: data.pincode,
      email: data.email,
    };
    transporter.sendMail(pincodeEmailOptions(dataObj), function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent to the student");
      }
    });
  }
};

module.exports = {
  sendEmail,
};
