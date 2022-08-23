import * as actions from "./action-types";

export const getFlags = () => async dispatch => {
	dispatch(changeLoading(true));
	try {
		const req = await fetch("https://restcountries.com/v3/all");
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
		const req = await fetch(`https://restcountries.com/v3/name/${flag_name}`);
		const data = await req.json();
		dispatch({
			type: actions.GET_FLAG_DETAILS,
			payload: data[0],
		});
	} catch (error) {
		dispatch(changeLoading(false));
		console.log(error);
	}
	dispatch(changeLoading(false));
};

export const setSort = sortType => dispatch => {
	dispatch({
		type: actions.SET_SORT,
		payload: sortType,
	});
};

export const setFilters = filters => dispatch => {
	dispatch({
		type: actions.SET_FILTERS,
		payload: filters,
	});
};

export const changeLoading = boolean => dispatch => {
	dispatch({
		type: actions.CHANGE_LOADING,
		payload: boolean,
	});
};

export const clearFilters = () => dispatch => {
	dispatch({
		type: actions.CLEAR_FILTERS,
		payload: [],
	});
};
