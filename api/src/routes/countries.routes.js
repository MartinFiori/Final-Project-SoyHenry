const { Router } = require("express");
const controller = require("../controllers/countries.controller");

const router = Router();

router.get("/", controller.getAllCountries);

module.exports = router;
