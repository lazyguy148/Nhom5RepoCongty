var express = require("express");
var router = express.Router();

router.get("/index2", function (req, res) {
    res.render("index2.ejs");
});
router.get("/widgets", function (req, res) {
    res.render("widgets.ejs");
});

module.exports = router;
