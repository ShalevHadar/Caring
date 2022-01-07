const express = require("express");
const { verifyTokenMiddleware } = require("../Token/tokenMiddleware");
const { createIncident, getIncidentsById } = require("./incidentService");
const router = express.Router();

// create Incident field in DB
router.post("/api/incident", verifyTokenMiddleware, async (req, res, next) => {
  console.log(req.body);
  try {
    await createIncident(req.body);
    res.status(200).json({ message: "Success, incident created" });
  } catch (error) {
    res.status(404).json({ message: "Failure, Couldn't send msg" });
  }
});

router.get(
  "/api/incident/:id",
  verifyTokenMiddleware,
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const studentData = await getIncidentsById(id);
      res.status(200).json({ message: "Succuss, All incidents", studentData });
    } catch (error) {
      res.status(404).json({ message: "Failure, Can't get all incidents" });
    }
  }
);

module.exports = router;
