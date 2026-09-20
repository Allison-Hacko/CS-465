var express = require("express");
var router = express.Router();

var ctrlTravlr = require("../controllers/travlr");

/* GET travel page. */
router.get("/", ctrlTravlr.travel);

module.exports = router;
