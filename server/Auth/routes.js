const express = require("express");
const { setStudentPinCode, authenticate } = require("../Auth/authService");
const { sendEmailWithPinCode } = require("../Auth/sendEmailService");
const router = express.Router();

// http request, set student pincode

router.post("/api/auth/pincode", async (req, res) => {
  try {
    const { email } = req.body;
    await setStudentPinCode(email);
    await sendEmailWithPinCode(email);
    res.status(200).json({ message: true });
  } catch (error) {
    res.status(500).json({ message: "internal error" });
  }
});

router.post("/api/auth", async (req, res) => {
  try {
    const { email, pincode } = req.body;
    const student = await authenticate(email, pincode);
    res.status(200).json({ message: "Succuss, Student Authorized", student });
  } catch (error) {
    res.status(401).json({ message: "Failure, Student Unauthorized" });
  }
});

module.exports = router;
