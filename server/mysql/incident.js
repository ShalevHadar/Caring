// query for teacher_id by class_id
const mysqlConnection = require("./client");

const createIncidentInDB = async (data) => {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(
      `INSERT INTO incidents values (${data.incident_id}, ${data.student_id},${data.teacher_id}, ${data.class_id}, '${data.content}', '${data.teacher_response}', '${data.admission_date}', ${data.completed}, ${isAnonymous})`,
      (err, results, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      }
    );
  });
};

const getIncidentsByTeacherId = async (teacher_id) => {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(
      `SELECT * FROM incidents WHERE teacher_id = '${teacher_id}'`,
      (err, results, field) => {
        if (err) {
          reject(err);
        }
        if (results.affectedRows == 0) {
          reject(new Error(`no incidents with the teacher_id: ${teacher_id}`));
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  createIncidentInDB,
  getIncidentsByTeacherId,
};
