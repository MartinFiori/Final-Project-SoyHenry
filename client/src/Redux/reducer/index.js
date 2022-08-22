import * as actions from "../actions/action-types.js";

const initialState = {
	countries: [],
	flagDetail: {},
	actualPage: 1,
	loading: true,
	sortby: "",
	pagination: {
		actualPage: 1,
		countriesPerPage: 0,
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
		case actions.SET_FILTERS:
			return {
				...state,
				filters: {
					...state.filters,
					[payload.filterType]: payload.filter,
				},
			};
		case actions.CHANGE_LOADING:
			return {
				...state,
				loading: payload,
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
			return {
				...state,
				sortby: payload,
				countries: sortedCountries,
			};
		default:
			return state;
	}
}

export default rootReducer;
