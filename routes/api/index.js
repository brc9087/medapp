const router = require("express").Router();
const diagnosisRoutes = require("./diagnosis");
// const infoRoutes = require("./info")

// Diagnosis routes
router.use("/diagnosis", diagnosisRoutes);
// router.use("/info", infoRoutes);

module.exports = router;
