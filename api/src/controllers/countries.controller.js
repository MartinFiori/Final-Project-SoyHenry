// const pool = require("../db");
const axios = require("axios");
const { Activity, Country } = require("../db.js");

const getAPICountries = async () => {
	const apiUrl = await axios.get("https://restcountries.com/v3/all");

	const apiInfo = await apiUrl.data.map(e => {
		return {
			id: e.cca3.toLowerCase(),
			name: e.name.common,
			img: e.flags[0],
			continent: e.continents[0],
			capital: e.capital ? e.capital[0] : "No tiene capital",
			subregion: e.subregion ? e.subregion : e.continents[0],
			area: e.area,
			population: e.population,
		};
	});
	return apiInfo;
};

const activityDB = async () => {
	const act = await Activity.findAll();
	return act;
};

const countDB = async () => {
	try {
		let info = await getAPICountries();
		info.forEach(e => {
			Country.findOrCreate({
				where: {
					id: e.id,
					name: e.name,
					flag: e.img,
					continent: e.continent,
					capital: e.capital,
					subregion: e.subregion,
					area: e.area,
					population: e.population,
				},
			});
		});
		const country = await Country.findAll({
			include: [Activity],
		});
		return country;
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = {
	countDB,
	activityDB,
};

// const getDBinfo = async () => {
// 	return await Country.findAll({
// 		include: Activity,
// 		atributes: ["name", "difficulty", "duration", "season"],
// 		through: {
// 			atributes: [],
// 		},
// 	});
// };

// const getAllCountries = async () => {
// 	try {
// 		const apiData = await getAPICountries();
// 		const dbData = await getDBinfo();
// 		const allData = apiData.concat(dbData);
// 		return await allData;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// const countDB = async () => {
// 	try {
// 		const apiCountries = await getAllCountries();
// 		apiCountries.forEach(el => {
// 			Country.findOrCreate({
// 				where: {
// 					id: el.id,
// 					name: el.name,
// 					img: el.img,
// 					continents: el.continents,
// 					capital: el.capital,
// 					subregion: el.subregion,
// 					area: el.area,
// 					population: el.population,
// 				},
// 			});
// 		});
// 		const allCountries = await Country.findAll();
// 		return allCountries;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
