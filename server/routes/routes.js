const express = require("express");
const { createPin, sendEmail, getPin } = require("../handlers/handlers");
const router = express.Router();

// routes
router.post("/api/createPinByEmail", createPin);
router.post("/api/sendEmail", sendEmail);
router.post("/api/getPin", getPin);

module.exports = router;
