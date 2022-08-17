import React, { useEffect } from "react";
import s from "./DetailPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner/Spinner.jsx";
import DetailContainer from "../components/DetailContainer/DetailContainer";
import { useParams } from "react-router-dom";
import { getDetails } from "../Redux/actions";

const DetailPage = ({ handleActiveNav }) => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const loading = useSelector(state => state.loading);
	const flagRedux = useSelector(state => state.flagDetail);
	useEffect(() => {
		dispatch(getDetails(id));
		handleActiveNav(true);
	}, [id, dispatch, handleActiveNav]);
	return (
		<div className={s.container}>
			{loading ? <Spinner /> : <DetailContainer info={flagRedux} />}
		</div>
	);
};

export default DetailPage;
