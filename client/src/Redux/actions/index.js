import * as actions from "./action-types";

export const getFlags = () => async dispatch => {
	dispatch(changeLoading(true));
	try {
		const req = await fetch("http://localhost:3001/countries/");
		const data = await req.json();
		dispatch({
			type: actions.GET_FLAGS,
			payload: data,
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
		const req = await fetch(
			`http://localhost:3001/countries/detail/${flag_name}`
		);
		const data = await req.json();
		dispatch({
			type: actions.GET_FLAG_DETAILS,
			payload: data,
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

export const setFilters = (filters, arrCountries) => dispatch => {
	let arr =
		filters.continents === "Todos"
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

export const clearFilters = () => dispatch => {
	dispatch({
		type: actions.CLEAR_FILTERS,
		payload: [],
	});
};

// export const resetPageFilter = () => dispatch => {
// 	dispatch({
// 		type: actions.RESET_PAGE,
// 		payload: 1,
// 	});
// };
