import React, { useEffect } from "react";
import s from "./ActivityPage.module.css";
import ActivityContainer from "../components/ActivityContainer/ActivityContainer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getFlags } from "../Redux/actions/index.js";
import Spinner from "../components/Spinner/Spinner.jsx";

const ActivityPage = ({ handleActiveNav }) => {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.loading);
	const countries = useSelector(state => state.countries);
	useEffect(() => {
		!countries.length && dispatch(getFlags());

		handleActiveNav(true);
	}, [handleActiveNav, dispatch, countries.length]);
	return (
		<div className={s.activityPage}>
			{loading ? <Spinner /> : <ActivityContainer />}
		</div>
	);
};

export default ActivityPage;
