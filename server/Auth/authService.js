const mysqlConnection = require("../Mysql/client");
const { updateStudentPinCode, getStudentByEmail } = require("../Mysql/student");

// generate a new pin and set it into the student dedicated field
const setStudentPinCode = async (email) => {
  const pincode = Math.floor(1000 + Math.random() * 9000);
  const updated = await updateStudentPinCode(email, pincode);
  return updated;
};

const authenticate = async (email, pincode) => {
  const student = await getStudentByEmail(email);
  pincode = parseInt(pincode);
  if (student.pincode === pincode) {
    return {
      student_id: student.student_id,
      firstname: student.firstname,
      lastname: student.lastname,
      class_id: student.class_id,
      email: student.email,
    };
  }
  throw new Error("Pincodes doesn't match");
};

module.exports = {
  setStudentPinCode,
  authenticate,
};
