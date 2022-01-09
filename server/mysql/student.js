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

const getIncidentsByStudentId = async (student_id) => {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(
      `SELECT * FROM incidents WHERE student_id = '${student_id}'`,
      (err, results, field) => {
        if (err) {
          reject(err);
        }
        if (results.affectedRows == 0) {
          reject(new Error(`no incidents with the student_id: ${student_id}`));
        } else {
          resolve(results);
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

const getStudentNameByStudentId = async (student_id) => {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(
      `SELECT * FROM students WHERE student_id = '${student_id}'`,
      (err, results, field) => {
        if (err) {
          reject(err);
        }
        if (results.affectedRows == 0) {
          reject(new Error(`No name for this student`));
        } else {
          resolve(results[0].firstname + " " + results[0].lastname);
        }
      }
    );
  });
};

module.exports = {
  getStudentByEmail,
  updateStudentPinCode,
  getIncidentsByStudentId,
  getStudentNameByStudentId,
};
