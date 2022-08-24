const { Router } = require("express");
const controller = require("../controllers/countries.controller");

const router = Router();

router.get("/", async (req, res) => {
	const { name } = req.query;
	let countriesTotal = await controller.getAllCountries();
	if (name) {
		console.log(name);
		let country = await countriesTotal.filter(el =>
			el.name.toLowerCase().includes(name.toLowerCase())
		);
		country.length != 0
			? res.status(200).send(country)
			: res.status(400).send("No existe el país 💀");
	} else {
		res.status(200).send(countriesTotal);
	}
});

module.exports = router;
