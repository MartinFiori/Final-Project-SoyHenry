// const pool = require("../db");
const getAllCountries = async (req, res, next) => {
	res.json("funciona desde el controller");
};

module.exports = {
	getAllCountries,
};
