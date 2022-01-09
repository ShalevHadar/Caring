const { createIncidentInDB } = require("../Mysql/incident");
const { getIncidentsByStudentId } = require("../Mysql/student");
const {
  getTeacherIdByClassId,
  getTeacherNameByTeacherId,
} = require("../Mysql/teacher_id");

const createIncident = async (data) => {
  let teacher_id = "";
  await getTeacherIdByClassId(data.class_id)
    .then((res) => (teacher_id = res.teacher_id))
    .catch((err) => console.log(err));

  let student_id = "";
  if (data.isAnonymous) {
    isAnonymous = true;
  } else {
    isAnonymous = false;
  }

  const incidentData = {
    incident_id: null,
    student_id: data.student_id,
    teacher_id,
    class_id: data.class_id,
    content: data.content,
    teacher_response: "",
    admission_date: data.date,
    completed: false,
    isAnonymous,
  };

  await createIncidentInDB(incidentData);
};

const getIncidentsById = async (studentId) => {
  const data = await getIncidentsByStudentId(studentId);
  const [teacher] = await getTeacherNameByTeacherId(data[0].teacher_id);
  data.forEach((item) => (item.teacher_id = teacher.firstname));
  return data;
};

module.exports = {
  createIncident,
  getIncidentsById,
};
