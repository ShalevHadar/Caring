const mysqlConnection = require("../mysql/config");

// generate a new pin and set it into the student dedicated field
const setStudentPinCode = async (email) => {
  const pincode = generatePinCode();
  return new Promise((resolve, reject) => {
    mysqlConnection.query(
      `UPDATE students SET pincode = ${pincode} WHERE email = '${email}'`,
      (err, results, field) => {
        if (err) reject(err);
        if (results.affectedRows == 0)
          reject(new Error(`no student with the email: ${email}`));
        resolve(true);
      }
    );
  });
};

const generatePinCode = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

module.exports = {
  setStudentPinCode,
};
