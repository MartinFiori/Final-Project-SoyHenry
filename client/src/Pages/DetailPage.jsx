import React, { useEffect } from "react";
import s from "./DetailPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../Redux/actions";
import Spinner from "../components/Spinner/Spinner.jsx";
import DetailContainer from "../components/DetailContainer/DetailContainer";
import { useParams } from "react-router-dom";

const DetailPage = ({ handleActiveNav }) => {
	const { id } = useParams();
	const loading = useSelector(state => state.loading);
	const flagRedux = useSelector(state => state.flagDetail);
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch(getDetails(id));
		console.log(id);
		handleActiveNav(true);
	}, [id, dispatch, handleActiveNav]);
	return (
		<div className={s.container}>
			{/* {loading ? <Spinner /> : <DetailContainer info={flagRedux} />} */}
		</div>
	);
};

export default DetailPage;
