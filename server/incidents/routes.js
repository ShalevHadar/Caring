const express = require("express");
const router = express.Router();

// create Incident field in DB
router.post("/api/incident", async (req, res) => {
  try {
    console.log("yo");
  } catch (error) {
    console.log(err);
  }
});

module.exports = router;
