import * as actions from "./action-types";

export const getFlags = () => dispatch => {
	return fetch("https://restcountries.com/v3/all")
		.then(res => res.json())
		.then(data =>
			dispatch({
				type: actions.GET_FLAGS,
				payload: data,
			})
		);
};

export const getDetails = flag_name => async dispatch => {
	try {
		const res = await fetch(`https://restcountries.com/v3/name/${flag_name}`);
		const data = await res.json();
		dispatch({
			type: actions.GET_FLAG_DETAILS,
			payload: data[0],
		});
	} catch (error) {
		console.log(error);
	}
};
