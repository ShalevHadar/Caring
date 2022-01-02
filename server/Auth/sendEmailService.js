const { getStudentByEmail } = require("../Mysql/student");
const { sendEmail } = require("../Email/emailService");

// send email to the email we got from the student query
const sendEmailWithPinCode = async (email) => {
  const student = await getStudentByEmail(email);
  const { pincode } = student;
  const data = { pincode, email, message: "sendPincode" };
  await sendEmail(data);
};

module.exports = {
  sendEmailWithPinCode,
};
