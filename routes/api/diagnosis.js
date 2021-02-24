const router = require("express").Router();
const diagnosisController = require("../../controllers/diagnosisController");

// Matches with "/api/books"
router.route("/")
  .get(diagnosisController.findAll)
  .post(diagnosisController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(diagnosisController.findById)
  .put(diagnosisController.update)
  .delete(diagnosisController.remove);

module.exports = router;
