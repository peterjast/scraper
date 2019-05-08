var router = require("express").Router();

router.get("/", function(req, res) {
  res.render("home");
});

router.get("/saved", function(req, res) {
  res.render("saved");
});

module.exports = router;