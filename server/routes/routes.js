const express = require("express");
const { getStudentQuery } = require("../queries/studentQuery");
const { setStudentPinCode } = require("../pincode-auth/authService");
const { sendEmailWithPinCode } = require("../pincode-auth/sendEmailService");
const router = express.Router();

// routes
router.post("/api/setStudentPinCode", async (req, res) => {
  try {
    const { email } = req.body;
    await setStudentPinCode(email);
    res.status(200).json({ message: "success, student pin was modified" });
  } catch (error) {
    res.status(404).json("email was not found");
  }
});

router.post("/api/sendVerificationEmail", async (req, res) => {
  try {
    const { email } = req.body;
    await sendEmailWithPinCode(email);
    res.status(200).json({ message: "success, Email was sent" });
  } catch (error) {
    res.status(502).json({ message: "Bad Gateway, Cannot send to that email" });
  }
});

router.post("/api/getStudentInfo", async (req, res) => {
  try {
    const { email } = req.body;
    const results = await getStudentQuery(email);
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json("email was not found");
  }
});

//router.post("/api/createIncident", createIncident);

module.exports = router;
