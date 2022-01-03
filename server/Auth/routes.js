const express = require("express");
const {
  setStudentPinCode,
  authenticate,
  getStudentData,
} = require("../Auth/authService");
const { sendEmailWithPinCode } = require("../Auth/sendEmailService");
const { getStudentByEmail } = require("../Mysql/student");
const { create } = require("../Token/token");
const { verifyTokenMiddleware } = require("../Token/tokenMiddleware");
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

module.exports = router;
