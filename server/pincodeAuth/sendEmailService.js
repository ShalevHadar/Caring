const { getStudentQuery } = require("../queries/studentQuery");
const { sendEmailFunction } = require("../emailHandler/emailService");

// send email to the email we got from the student query
const sendEmailWithPinCode = async (email) => {
  getStudentQuery(email)
    .then((res) => {
      const [{ pincode }] = res;
      sendEmailFunction(email, pincode);
    })
    .catch((err) => console.log(err));

  // sendEmailFunction(email, pincode);
};

module.exports = {
  sendEmailWithPinCode,
};
