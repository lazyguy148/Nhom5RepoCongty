var express = require("express");
var router = express.Router();
router.use("/home", require (__dirname + "/homecontroller"));
router.use("/admin", require(__dirname + "/admin/admincontroller"));
router.get("/", function(req,res){
    res.render("index.ejs");
});
router.get("/thuat", function(req,res){
    res.render("thuat.ejs");
});
module.exports = router;