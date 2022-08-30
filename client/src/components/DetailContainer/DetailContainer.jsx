import React from "react";
import s from "./DetailContainer.module.css";

const DetailContainer = props => {
	const { info } = props;
	return (
		<div className={s.detailContainer}>
			<div
				className={s.bg__image}
				style={{ backgroundImage: `url(${info?.flag})` }}
			></div>
			<div className={s.info}>
				<table className={s.tg}>
					<caption className={s.caption}>{info?.name}</caption>
					<tbody>
						<tr>
							<th className={s.tableData}>continents</th>
							<th className={s.tableData}>Code</th>
							<th className={s.tableData}>capital</th>
						</tr>
						<tr>
							<td className={s.tableData}>{info?.continent}</td>
							<td className={s.tableData}>{info?.id}</td>
							<td className={s.tableData}>{info?.capital}</td>
						</tr>
						<tr>
							<th className={s.tableData}>subregion</th>
							<th className={s.tableData}>area</th>
							<th className={s.tableData}>population</th>
						</tr>
						<tr>
							<td className={s.tableData}>{info?.subregion}</td>
							<td className={s.tableData}>{info?.area}</td>
							<td className={s.tableData}>{info?.population}</td>
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
