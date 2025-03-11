var express = require("express");
var router = express.Router();
router.use("/home", require (__dirname + "/homecontroller"));
router.use("/admin", require(__dirname + "/admin/admincontroller"));
router.use("/admin", require(__dirname + "/admin/admincontroller"));
router.get("/", function(req,res){
    res.render("index.ejs");
});
router.get("/Son", function (req, res) {
    res.render("Son.ejs", {
        title: "Trang của Sơn",
        message: "Chào mừng đến với trang của Sơn!"
    });
});
module.exports = router;