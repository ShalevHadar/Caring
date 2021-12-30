const express = require("express");
const { getStudentQuery } = require("../queries/studentQuery");
const { setStudentPinCode } = require("../pincodeAuth/authService");
const { sendEmailWithPinCode } = require("../pincodeAuth/sendEmailService");
const router = express.Router();

// http request, set student pincode
router.post("/api/setStudentPinCode", async (req, res) => {
  try {
    const { email } = req.body;
    await setStudentPinCode(email);
    res.status(200).json({ message: "success, student pin was modified" });
  } catch (error) {
    res.status(404).json("email was not found");
  }
});

// http request, send verification email to student with pincode
router.post("/api/sendVerificationEmail", async (req, res) => {
  try {
    const { email } = req.body;
    await sendEmailWithPinCode(email);
    res.status(200).json({ message: "success, Email was sent" });
  } catch (error) {
    res.status(502).json({ message: "Bad Gateway, Cannot send to that email" });
  }
});

// get student info - generic query by email (unique)
router.post("/api/getStudentInfo", async (req, res) => {
  try {
    const { email } = req.body;
    const results = await getStudentQuery(email);
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json("email was not found");
  }
});

// create Incident field in DB
router.post("/api/createIncident", async (req, res) => {
  try {
    console.log("yo");
  } catch (error) {
    console.log(err);
  }
});

module.exports = router;
