var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("pages/index");
});
router.get("/login", function (req, res) {
    res.render("pages/login");
});
router.get("/locais-esportivos", function (req, res) {
    res.render("pages/locais-esportivos");
});
router.get("/product-page", function (req, res) {
    res.render("pages/product-page");
});
router.get("/product-page-2", function (req, res) {
    res.render("pages/product-page-2");
});
router.get("/profile", function (req, res) {
    res.render("pages/profile");
});
router.get("/register", function (req, res) {
    res.render("pages/register");
});
router.get("/soccer", function (req, res) {
    res.render("pages/soccer");
});
router.get("/empresa", function (req, res) {
    res.render("pages/empresa");
});
router.get("/add-product", function (req, res) {
    res.render("pages/add-product");
});
router.get("/cart", function (req, res) {
    res.render("pages/cart");
});

module.exports = router;
