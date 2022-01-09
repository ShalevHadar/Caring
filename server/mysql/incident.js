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
      `SELECT incident_id, incidents.student_id,  teacher_id, incidents.class_id,  content, teacher_response, admission_date, completed, isAnonymous, firstname, lastname, email FROM incidents INNER JOIN 
      students ON incidents.student_id = students.student_id WHERE teacher_id = ${teacher_id} ORDER BY admission_date ASC`,
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
