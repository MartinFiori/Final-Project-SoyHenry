import * as actions from "../actions/action-types.js";

const initialState = {
	allFlags: [],
	flagDetail: {},
	actualPage: 1,
	filters: {
		continent: "",
	},
};

function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case actions.GET_FLAGS:
			return {
				...state,
				allFlags: payload,
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
		default:
			return state;
	}
}

export default rootReducer;