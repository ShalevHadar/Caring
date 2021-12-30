const express = require("express");
const mySql = require("../mysql/config");
const router = express.Router();
const { setStudentPinCode } = require("./auth-service");

// handle http request
router.post("/api/createPinByEmail", async (req, res) => {
  try {
    const { email } = req.body;
    await setStudentPinCode(email);
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json("email was not found");
  }
});



