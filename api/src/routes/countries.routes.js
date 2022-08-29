const { Router } = require("express");
const controller = require("../controllers/countries.controller");

const router = Router();

router.get("/", async (req, res) => {
	const { name } = req.query;
	let countriesTotal = await controller.countDB();
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

router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const allCountries = await controller.getAllCountries();
		if (id) {
			let found = await allCountries.find(el => el.id === id);
			found
				? res.status(200).json(found)
				: res.status(404).json("Country not found 💣");
		}
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
