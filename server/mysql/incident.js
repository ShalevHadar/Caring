// query for teacher_id by class_id
const mysqlConnection = require("./client");

const createIncidentInDB = async (data) => {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(
      `INSERT INTO incidents values (${data.incident_id}, ${data.student_id},${data.teacher_id}, ${data.class_id}, '${data.content}', '${data.teacher_response}', '${data.admission_date}', ${data.completed})`,
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

module.exports = {
  createIncidentInDB,
};
