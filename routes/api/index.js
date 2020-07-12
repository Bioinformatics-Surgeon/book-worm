const router = require("express").Router();
const wordRoutes = require("./words");

// Book routes
router.use("/words", wordRoutes);

module.exports = router;
