const { getStudentByEmail } = require("../mysql/student");
const { sendEmail } = require("../email/emailService");

// send email to the email we got from the student query
const sendEmailWithPinCode = async (email) => {
  getStudentByEmail(email)
    .then((res) => {
      const [{ pincode }] = res;
      const data = { pincode, email, message: "sendPincode" };
      sendEmail(data);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  sendEmailWithPinCode,
};
