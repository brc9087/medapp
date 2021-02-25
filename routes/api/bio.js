const router = require("express").Router();
const bioController = require("../../controllers/bioController");

// Matches with "/api/bio"
router.route("/")
  .get(bioController.findAll)
  .post(bioController.create);

// Matches with "/api/bio/:id"
router
  .route("/:id")
  .get(bioController.findById)
  .put(bioController.update)
  .delete(bioController.remove);

module.exports = router;
