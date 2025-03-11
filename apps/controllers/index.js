var express = require("express");
var router = express.Router();
router.use("/home", require (__dirname + "/homecontroller"));
router.use("/admin", require(__dirname + "/admin/admincontroller"));
router.get("/", function(req,res){
    res.render("index.ejs");
});

router.get("/Hieu", function (req, res) {
    res.render("Hieu.ejs", {
        title: "Trang của Hiếu",
        message: "Chào mừng đến với trang của Hiếu!"
    });
});

router.get("/thuat", function(req,res){
    res.render("thuat.ejs");
});

module.exports = router;
