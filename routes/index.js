const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// api routes
router.use("/api", apiRoutes);

// default route => send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
