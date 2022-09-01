import React, { useEffect } from "react";
import CardsContainer from "../components/CardsContainer/CardsContainer.jsx";
import s from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getFlags } from "../Redux/actions/";
import Spinner from "../components/Spinner/Spinner.jsx";
import Sorts from "../components/Sorts/Sorts.jsx";
import Filters from "../components/Filters/Filters.jsx";

const HomePage = ({ handleActiveNav }) => {
	const dispatch = useDispatch();
	const countriesRedux = useSelector(state => state.countries);
	const filteredRedux = useSelector(state => state.countriesFiltered);
	const continents = useSelector(state => state.continents);
	const sortby = useSelector(state => state.sortby);
	const loading = useSelector(state => state.loading);
	const activities = useSelector(state => state.activities);

	useEffect(() => {
		handleActiveNav(true);
		!activities.length && dispatch(getActivities());
		!countriesRedux.length && dispatch(getFlags());
	}, [
		dispatch,
		handleActiveNav,
		countriesRedux,
		sortby,
		continents,
		activities.length,
	]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div className={s.cards}>
					<div className={s.filter}>
						<Filters />
					</div>
					<div className={s.card}>
						<Sorts />
						<CardsContainer list={filteredRedux} />
					</div>
				</div>
			)}
		</>
	);
};

export default HomePage;
