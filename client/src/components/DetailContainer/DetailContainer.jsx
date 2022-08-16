import React from "react";
import s from "./DetailContainer.module.css";

const DetailContainer = ({
	info: {
		name: { common },
		cca3,
		continents,
		capital,
		subregion,
		area,
		population,
		flags,
	},
}) => {
	return (
		<div className={s.detailContainer}>
			<div className={s.triangle}>
				<img className={s.image} src={flags[0]} alt={common} />
			</div>
		</div>
	);
};

export default DetailContainer;
