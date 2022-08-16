import React, { useEffect } from "react";
import CardsContainer from "../components/CardsContainer/CardsContainer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getFlags } from "../Redux/actions/";
import Spinner from "../components/Spinner/Spinner.jsx";

const HomePage = ({ handleActiveNav }) => {
	const dispatch = useDispatch();
	const flagsRedux = useSelector(state => state.allFlags);
	useEffect(() => {
		handleActiveNav(true);
		!flagsRedux.length && dispatch(getFlags());
		return () => {
			handleActiveNav(false);
		};
	}, [handleActiveNav, flagsRedux, dispatch]);

	return (
		<>
			{!flagsRedux.length ? <Spinner /> : <CardsContainer list={flagsRedux} />}
		</>
	);
};

export default HomePage;
