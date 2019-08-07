const express = require("express");
const router = express.Router();
const data = require("../public/phones.json");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/phones", (req, res, next) => {
  res.json(data);
});

module.exports = router;
