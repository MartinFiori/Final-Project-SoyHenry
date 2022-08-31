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
				countriesFiltered: payload,
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
			return {
				...state,
				countriesFiltered: payload.arr,
				pagination: {
					...state.pagination,
					actualPage: 1,
				},
				filters: {
					...state.filters,
					...payload.filters,
				},
			};
		case actions.SET_SORT:
			return {
				...state,
				sortby: payload.sortType,
				countriesFiltered: payload.arr,
				pagination: {
					...state.pagination,
					actualPage: 1,
				},
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
		// case actions.RESET_PAGE:
		// 	return {
		// 		...state,
		// 		pagination: {
		// 			...state.pagination,
		// 			actualPage: payload,
		// 		},
		// 	};
		case actions.GET_CONTINENTS:
			return {
				...state,
				continents: payload,
			};
		default:
			return state;
	}
}

export default rootReducer;
