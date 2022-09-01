const validate = activity => {
	const seasons = ["summer", "spring", "autumn", "winter"];

	console.log(activity.countries);
	let errors = {};
	if (!activity.name) {
		errors.name = "Nombre requrido";
	}
	if (activity.name.search("[0-9]") !== -1) {
		errors.name = "El Nombre no puede tener numeros";
	}
	if (activity.name.search("[^A-Za-z0-9]") !== -1) {
		errors.name = "El Nombre no puede tener simbolos";
	}
	if (activity.difficulty > 5 || activity.difficulty < 1) {
		errors.difficulty = "Dificultad maxima de 1 a 5";
	}
	if (!activity.duration) errors.duration = "Duration is required!";

	if (activity.duration > 180 || activity.duration < 1) {
		errors.duration = "Duracion maxima de 1 a 180";
	}
	if (!activity.season) {
		errors.season = "Seleccionar una temporada";
	}

	if (!seasons.includes(activity.season)) errors.season = "Season invalida";

	if (!activity?.countries.length) {
		errors.countries = "Seleccionar por lo menos un pais";
	}
	return errors;
};

export default validate;
