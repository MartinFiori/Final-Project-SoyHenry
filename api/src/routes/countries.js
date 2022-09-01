const { Router } = require("express");
const controller = require("../controllers/countries.controller");
const { Activity, Country } = require("../db.js");

const router = Router();

router.get("/", async (req, res) => {
	const { name } = req.query;
	name && console.log(name);
	try {
		const allCountries = await controller.countDB();
		if (name) {
			const founds = allCountries.filter(el =>
				el.name.toLowerCase().includes(name.toLowerCase())
			);
			founds.length
				? res.status(200).send(founds)
				: res.status(404).send("No matches found 💀");
		}
		res.status(200).send(allCountries);
	} catch (error) {
		console.log(error);
	}
});

router.get("/details/:id", async (req, res) => {
	const { id } = req.params;
	try {
		// const allCountries = await controller.countDB();
		// if (id) {
		// 	let found = await allCountries.find(el => el.id === id);
		// 	found
		// 		? res.status(200).json(found)
		// 		: res.status(404).json("Country not found 💣");
		// }
		const found = await Country.findAll({
			where: { id: id },
			include: [Activity],
		});
		res.send(found);
	} catch (error) {
		console.log(error);
	}
});

router.get("/activities", async (req, res) => {
	const act = await controller.activityDB();
	res.send(act);
});

router.post("/activities", async (req, res) => {
	const { name, difficulty, season, duration, countries } = req.body;
	setTimeout(() => {
		console.log(req.body);
	}, 1000);
	try {
		let newActivity = await Activity.create({
			name,
			difficulty,
			duration,
			season,
			countries: countries,
		});
		let countryDB = await Country.findAll({
			where: { name: countries },
		});
		newActivity.addCountries(countryDB);
		res.send("Activity created 🌈");
	} catch (error) {
		console.log(error);
		res.status(404).send("problemillas compañero");
	}
});

module.exports = router;
