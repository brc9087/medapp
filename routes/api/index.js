const router = require("express").Router();
const diagnosisRoutes = require("./diagnosis");
const bioRoutes = require("./bio")

// Diagnosis routes
router.use("/diagnosis", diagnosisRoutes);
router.use("/bio", bioRoutes);

module.exports = router;
