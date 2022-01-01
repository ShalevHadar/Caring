const express = require("express");
const { createIncident } = require("./incidentService");
const router = express.Router();

// create Incident field in DB
router.post("/api/incident", async (req, res) => {
  try {
    const incidentData = await createIncident(req.body);
    res.status(200).json({ message: "Success, incident created" });
  } catch (error) {
    res.status(404).json({ message: "Failure, Couldn't send msg" });
  }
});

module.exports = router;
