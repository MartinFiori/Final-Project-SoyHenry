const { Router } = require("express");
// Importar todos los routers;
const countriesRouter = require("./countries.js");

const router = Router();

// Configurar los routers
router.use("/countries", countriesRouter);

module.exports = router;
