const express = require("express");
const { setStudentPinCode, authenticate } = require("../Auth/authService");
const { sendEmailWithPinCode } = require("../Auth/sendEmailService");
const { authenticateTeacher } = require("../Teacher/TeacherService");
const { create } = require("../Token/token");
const router = express.Router();

// http post request, set student pincode & send email
router.post("/api/auth/pincode", async (req, res) => {
  try {
    const { email } = req.body;
    // if token exist for this email response with incident screen
    await setStudentPinCode(email);
    await sendEmailWithPinCode(email);
    res.status(200).json({ message: true });
  } catch (error) {
    res.status(500).json({ message: "internal error" });
  }
});

// http post request, verify the pincode
router.post("/api/auth", async (req, res) => {
  try {
    const { email, pincode } = req.body;
    const student = await authenticate(email, pincode);
    const token = await create(email);
    res
      .status(200)
      .json({ message: "Succuss, Student Authorized", student, token });
  } catch (error) {
    res.status(401).json({ message: "Failure, Student Unauthorized" });
  }
});

router.post("/teacher/auth", async (req, res) => {
  try {
    const { email, password } = req.body;
    const teacher_id = await authenticateTeacher(email, password);
    const token = await create(email);
    res
      .status(200)
      .json({ message: "Succuss, Teacher Authorized", token, teacher_id });
  } catch (error) {
    res.status(404).json({ message: "Teacher was not found" });
  }
});

module.exports = router;
