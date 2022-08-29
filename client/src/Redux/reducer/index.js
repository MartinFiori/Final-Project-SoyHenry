import * as actions from "../actions/action-types.js";

const initialState = {
	countries: [],
	countriesFiltered: [],
	flagDetail: {},
	continents: [],
	loading: true,
	sortby: "",
	filters: {},
	pagination: {
		actualPage: 1,
		countriesPerPage: 9,
	},
};

function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case actions.GET_FLAGS:
			return {
				...state,
				countries: payload,
			};
		case actions.GET_FLAG_DETAILS:
			return {
				...state,
				flagDetail: payload,
			};
		case actions.CHANGE_LOADING:
			return {
				...state,
				loading: payload,
			};
		case actions.SET_FILTERS:
			let arr = state.countries.filter(
				el => Object.values(payload)[0] === el.continents[0]
			);
			return {
				...state,
				countriesFiltered: arr,
				pagination: {
					...state.pagination,
					actualPage: 1,
				},
				filters: {
					...state.filters,
					...payload,
				},
			};
		case actions.SET_SORT:
			const sortedCountries =
				payload === "COUNTRY_ASC"
					? state.countries.sort((a, b) =>
							a.name.common.localeCompare(b.name.common)
					  )
					: payload === "COUNTRY_DESC"
					? state.countries.sort((a, b) =>
							b.name.common.localeCompare(a.name.common)
					  )
					: payload === "POPULATION_ASC"
					? state.countries.sort((a, b) => b.population - a.population)
					: state.countries.sort((a, b) => a.population - b.population);
			const sortedFiltered =
				payload === "COUNTRY_ASC"
					? state.countriesFiltered.sort((a, b) =>
							a.name.common.localeCompare(b.name.common)
					  )
					: payload === "COUNTRY_DESC"
					? state.countriesFiltered.sort((a, b) =>
							b.name.common.localeCompare(a.name.common)
					  )
					: payload === "POPULATION_ASC"
					? state.countriesFiltered.sort((a, b) => b.population - a.population)
					: state.countriesFiltered.sort((a, b) => a.population - b.population);
			return {
				...state,
				sortby: payload,
				countries: sortedCountries,
				countriesFiltered: sortedFiltered,
			};
		case actions.CLEAR_FILTERS:
			return {
				...state,
				countriesFiltered: payload,
				filters: {},
			};
		case actions.SET_ACTUAL_PAGE:
			return {
				...state,
				pagination: {
					...state.pagination,
					actualPage: payload.pageNumber,
					countriesPerPage: payload.quantity,
				},
			};
		case actions.RESET_PAGE:
			return {
				...state,
				pagination: {
					...state.pagination,
					actualPage: payload,
				},
			};
		case actions.GET_CONTINENTS:
			return {
				...state,
				continents: [
					"Todos",
					...new Set(state.countries.map(el => el.continents[0])),
				],
			};
		default:
			return state;
	}
}

export default rootReducer;
