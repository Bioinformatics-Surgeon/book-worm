const router = require("express").Router();
const wordsController = require("../../controllers/wordsController");

// routes to "/api/words"
router.route("/").get(wordsController.findAll).post(wordsController.create);

// routes to "/api/words/:id"
router
  .route("/:id")
  .get(wordsController.findById)
  .put(wordsController.update)
  .delete(wordsController.remove);

module.exports = router;
