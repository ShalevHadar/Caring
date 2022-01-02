const { createIncidentInDB } = require("../Mysql/incident");
const { getTeacherIdByClassId } = require("../Mysql/teacher_id");

const createIncident = async (data) => {
  let teacher_id = "";
  await getTeacherIdByClassId(data.class_id)
    .then((res) => (teacher_id = res.teacher_id))
    .catch((err) => console.log(err));

  let student_id = "";
  if (data.isAnonymous) {
    student_id = null;
  } else {
    student_id = data.student_id;
  }

  const incidentData = {
    incident_id: null,
    student_id: student_id,
    teacher_id,
    class_id: data.class_id,
    content: data.content,
    teacher_response: "",
    admission_date: data.date,
    completed: false,
  };

  await createIncidentInDB(incidentData);
};

module.exports = {
  createIncident,
};
