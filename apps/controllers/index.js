var express = require("express");
var router = express.Router();
router.use("/home", require(__dirname + "/homecontroller"));
router.use("/admin", require(__dirname + "/admin/admincontroller"));

// Trang chính
router.get("/", function(req, res) {
    res.render("index.ejs");
});

// Trang của Sơn
router.get("/Son", function (req, res) {
    res.render("Son.ejs", {
        title: "Trang của Sơn",
        message: "Chào mừng đến với trang của Sơn!"
    });
});

// Trang của Hiếu
router.get("/Hieu", function (req, res) {
    res.render("Hieu.ejs", {
        title: "Trang của Hiếu",
        message: "Chào mừng đến với trang của Hiếu!"
    });
});

// Trang của Thuật
router.get("/thuat", function(req, res) {
    res.render("thuat.ejs");
});

module.exports = router;
