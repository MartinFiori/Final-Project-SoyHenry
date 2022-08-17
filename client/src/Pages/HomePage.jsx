import React, { useEffect } from "react";
import CardsContainer from "../components/CardsContainer/CardsContainer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getFlags } from "../Redux/actions/";
import Spinner from "../components/Spinner/Spinner.jsx";

const HomePage = ({ handleActiveNav }) => {
	const dispatch = useDispatch();
	const flagsRedux = useSelector(state => state.allFlags);
	const loading = useSelector(state => state.loading);
	useEffect(() => {
		handleActiveNav(true);
		!flagsRedux.length && dispatch(getFlags());
	}, [handleActiveNav, flagsRedux, dispatch]);

	return <>{loading ? <Spinner /> : <CardsContainer list={flagsRedux} />}</>;
};

export default HomePage;
