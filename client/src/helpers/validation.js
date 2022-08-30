export const validation = ({ name, diff, season, duration, countries }) => {
	const seasons = ["Summer", "Spring", "Winter", "Autumn"];

	const errors = {};

	if (!name.length) errors.name = "Add a name for the activity";
	if (diff > 5 || diff < 1)
		errors.diff = "Difficulty must be a value between 1 and 5";
	else if (typeof diff !== "number")
		errors.diff = "Difficulty must be a number";
	else if (!Number.isInteger(duration))
		errors.duration = "Difficulty must be integer";
	if (!seasons.includes(season)) errors.season = "Invalid season";
	if (typeof duration !== "number")
		errors.duration = "Duration must be a number";
	else if (duration <= 0) errors.duration = "Invalid Duration";
	if (!countries.length)
		errors.countries = "Add at least one country for this activity";

	return errors;
};
