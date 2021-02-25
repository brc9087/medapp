const router = require("express").Router();
const diagnosisRoutes = require("./diagnosis");
const bioRoutes = require("./bio")
const newRoutes = require("./newdx")

// Diagnosis routes
router.use("/diagnosis", diagnosisRoutes);
router.use("/bio", bioRoutes);
router.use("/new", newRoutes );

module.exports = router;
