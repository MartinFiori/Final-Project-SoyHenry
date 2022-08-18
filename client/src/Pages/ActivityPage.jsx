import React, { useEffect } from "react";
import s from "./ActivityPage.module.css";
import ActivityContainer from "../components/ActivityContainer/ActivityContainer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getFlags } from "../Redux/actions/index.js";

const ActivityPage = ({ handleActiveNav }) => {
	const dispatch = useDispatch();
	const flagsRedux = useSelector(state => state.allFlags);
	const orderedNames = flagsRedux
		.map(e => e.name.common)
		.sort((a, b) => a.localeCompare(b));
	useEffect(() => {
		!flagsRedux.length && dispatch(getFlags());
		handleActiveNav(true);
	}, [handleActiveNav, dispatch, flagsRedux]);
	return (
		<div className={s.activityPage}>
			<ActivityContainer countries={orderedNames} />
		</div>
	);
};

export default ActivityPage;
