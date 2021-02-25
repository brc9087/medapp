const router = require("express").Router();
const newdxController = require("../../controllers/newdxController");

// Matches with "/api/books"
router.route("/")
  .get(newdxController.findAll)
  .post(newdxController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(newdxController.findById)
  .put(newdxController.update)
  .delete(newdxController.remove);

module.exports = router;
