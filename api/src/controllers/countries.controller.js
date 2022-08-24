// const pool = require("../db");
const axios = require("axios");
const { Activity, Country } = require("../db.js");

const getAPICountries = async () => {
	const apiUrl = await axios.get("https://restcountries.com/v3/all");
	const apiInfo = await apiUrl.data.map(el => {
		return {
			id: el.cca3,
			name: el.name.common,
			img: el.flags[0],
			continents: el.continents[0],
			capital: el.capital,
			subregion: el.subregion,
			area: el.area,
			population: el.population,
		};
	});
	return apiInfo;
};

const getDBinfo = async () => {
	return await Country.findAll({
		include: Activity,
		atributes: ["name", "difficulty", "duration", "season"],
		through: {
			atributes: [],
		},
	});
};

const getAllCountries = async () => {
	try {
		const apiData = await getAPICountries();
		const dbData = await getDBinfo();
		const allData = apiData.concat(dbData);
		return await allData;
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getAllCountries,
};
