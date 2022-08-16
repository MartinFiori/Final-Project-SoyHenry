import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../Redux/actions";
import Spinner from "../components/Spinner/Spinner.jsx";
import DetailContainer from "../components/DetailContainer/DetailContainer";

const DetailPage = props => {
	const [loading, setLoading] = useState(true);
	const flagRedux = useSelector(state => state.flagDetail);
	const dispatch = useDispatch();
	const id = props.match.params.id;
	useEffect(() => {
		dispatch(getDetails(id));
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [id, dispatch]);
	return <>{loading ? <Spinner /> : <DetailContainer info={flagRedux} />}</>;
};

export default DetailPage;
