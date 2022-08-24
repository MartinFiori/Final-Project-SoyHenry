import React, { useEffect } from "react";
import CardsContainer from "../components/CardsContainer/CardsContainer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getFlags } from "../Redux/actions/";
import Spinner from "../components/Spinner/Spinner.jsx";
import Sorts from "../components/Sorts/Sorts.jsx";
import Filters from "../components/Filters/Filters.jsx";

const HomePage = ({ handleActiveNav }) => {
	const dispatch = useDispatch();
	const countriesRedux = useSelector(state => state.countries);
	const filteredRedux = useSelector(state => state.countriesFiltered);
	const sortby = useSelector(state => state.sortby);
	const loading = useSelector(state => state.loading);

	useEffect(() => {
		handleActiveNav(true);
		!countriesRedux.length && dispatch(getFlags());
	}, [dispatch, handleActiveNav, countriesRedux, sortby]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<>
					<button onClick={() => console.log(countriesRedux.length)}>
						asdf
					</button>
					<Filters />
					<Sorts />
					<CardsContainer
						list={!filteredRedux.length ? countriesRedux : filteredRedux}
					/>
				</>
			)}
		</>
	);
};

export default HomePage;
