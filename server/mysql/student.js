// query for student info by email
const mysqlConnection = require("./client");

const getStudentByEmail = async (email) => {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(
      `SELECT * FROM students WHERE email = '${email}'`,
      (err, results, field) => {
        if (err) {
          reject(err);
        }
        if (results.affectedRows == 0) {
          reject(new Error(`no student with the email: ${email}`));
        } else {
          resolve(results[0]);
        }
      }
    );
  });
};

const updateStudentPinCode = (email, pincode) => {
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

module.exports = {
  getStudentByEmail,
  updateStudentPinCode,
};
