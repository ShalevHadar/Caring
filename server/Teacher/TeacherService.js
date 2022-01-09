const { getIncidentsByTeacherId } = require("../Mysql/incident");
const { getStudentNameByStudentId } = require("../Mysql/student");
const { getTeacherNameByTeacherEmail } = require("../Mysql/teacher_id");

const authenticateTeacher = async (email, password) => {
  const teacher_data = await getTeacherNameByTeacherEmail(email);
  if (teacher_data.password === password) {
    return teacher_data.teacher_id;
  }
  throw new Error("Pincodes doesn't match");
};

const getAllIncidentsByTeacherId = async (id) => {
  let incidents = await getIncidentsByTeacherId(id);
  return incidents;
};

module.exports = {
  authenticateTeacher,
  getAllIncidentsByTeacherId,
};
