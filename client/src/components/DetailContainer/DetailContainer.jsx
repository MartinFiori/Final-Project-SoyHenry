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
			<div
				className={s.bg__image}
				style={{ backgroundImage: `url(${flags[0]})` }}
			></div>
			<div className={s.info}>
				<table className={s.tg}>
					<caption className={s.caption}>{common}</caption>
					<tbody>
						<tr>
							<th className={s.tableData}>continents</th>
							<th className={s.tableData}>Code</th>
							<th className={s.tableData}>capital</th>
						</tr>
						<tr>
							<td className={s.tableData}>{continents}</td>
							<td className={s.tableData}>{cca3}</td>
							<td className={s.tableData}>{capital}</td>
						</tr>
						<tr>
							<th className={s.tableData}>subregion</th>
							<th className={s.tableData}>area</th>
							<th className={s.tableData}>population</th>
						</tr>
						<tr>
							<td className={s.tableData}>{subregion}</td>
							<td className={s.tableData}>{area}</td>
							<td className={s.tableData}>{population}</td>
						</tr>
					</tbody>
				</table>
				<section>
					<h3 className={s.activitiesTitle}>Tourist Activities:</h3>
				</section>
			</div>
		</div>
	);
};

export default DetailContainer;
