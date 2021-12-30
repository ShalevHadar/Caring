const mysqlConnection = require("../mysql/config");

const getStudentQuery = async (email) => {
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
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  getStudentQuery,
};
