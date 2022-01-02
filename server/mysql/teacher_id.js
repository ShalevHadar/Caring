// query for teacher_id by class_id
const mysqlConnection = require("./client");

const getTeacherIdByClassId = async (class_id) => {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(
      `SELECT teacher_id FROM classes WHERE class_id = '${class_id}'`,
      (err, results, field) => {
        if (err) {
          reject(err);
        }
        if (results.affectedRows == 0) {
          reject(new Error(`No teachers responsible for this class`));
        } else {
          resolve(results[0]);
        }
      }
    );
  });
};

module.exports = {
  getTeacherIdByClassId,
};
