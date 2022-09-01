import * as actions from "./action-types";
import axios from "axios";

export const getFlags = () => async dispatch => {
	dispatch(changeLoading(true));
	try {
		const req = await axios("http://localhost:3001/countries/");
		dispatch({
			type: actions.GET_FLAGS,
			payload: req.data,
		});
	} catch (error) {
		dispatch(changeLoading(false));
		console.log(error);
	}
	dispatch(changeLoading(false));
};

export const getDetails = flag_name => async dispatch => {
	dispatch(changeLoading(true));
	try {
		const req = await axios(
			`http://localhost:3001/countries/details/${flag_name}`
		);
		dispatch({
			type: actions.GET_FLAG_DETAILS,
			payload: req.data,
		});
	} catch (error) {
		dispatch(changeLoading(false));
		console.log(error);
	}
	dispatch(changeLoading(false));
};

export const setSort = (sortType, arrCountries) => dispatch => {
	const sortedCountries =
		sortType === "COUNTRY_ASC"
			? arrCountries.sort((a, b) => a.name.localeCompare(b.name))
			: sortType === "COUNTRY_DESC"
			? arrCountries.sort((a, b) => b.name.localeCompare(a.name))
			: sortType === "POPULATION_ASC"
			? arrCountries.sort((a, b) => b.population - a.population)
			: arrCountries.sort((a, b) => a.population - b.population);
	dispatch({
		type: actions.SET_SORT,
		payload: {
			sortType: sortType,
			arr: sortedCountries,
		},
	});
};

export const getContinents = countries => dispatch => {
	dispatch({
		type: actions.GET_CONTINENTS,
		payload: countries,
	});
};

export const setFilters = (filters, arrCountries, allFilters) => dispatch => {
	let arr =
		filters.continents === "All"
			? arrCountries
			: arrCountries.filter(el => filters.continents === el.continent);
	dispatch({
		type: actions.SET_FILTERS,
		payload: {
			filters: filters,
			arr: arr,
		},
	});
};

export const changeLoading = boolean => dispatch => {
	dispatch({
		type: actions.CHANGE_LOADING,
		payload: boolean,
	});
};

export const setActualPage = (num, countriesPerPage) => dispatch => {
	dispatch({
		type: actions.SET_ACTUAL_PAGE,
		payload: {
			pageNumber: num,
			quantity: countriesPerPage,
		},
	});
};

export function postActivity(payload) {
	return async function () {
		const json = await axios.post(
			"http://localhost:3001/countries/activities",
			payload
		);
		return json;
	};
}

export function getActivities() {
	return async function (dispatch) {
		const activities = await axios.get(
			"http://localhost:3001/countries/activities"
		);
		const activitiesName = activities.data.map(el => el.name.toLowerCase());
		dispatch({
			type: actions.GET_ACTIVITIES,
			payload: [...new Set(activitiesName)],
		});
	};
}
