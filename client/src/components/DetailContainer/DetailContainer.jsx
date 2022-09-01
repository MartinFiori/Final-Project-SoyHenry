import React from "react";
import s from "./DetailContainer.module.css";

const DetailContainer = props => {
	const { info } = props;
	return (
		<div className={s.detailContainer}>
			<div
				className={s.bg__image}
				style={{ backgroundImage: `url(${info[0]?.flag})` }}
			></div>
			<div className={s.info}>
				<table className={s.tg}>
					<caption className={s.caption}>{info[0]?.name}</caption>
					<tbody>
						<tr>
							<th className={s.tableData}>continents</th>
							<th className={s.tableData}>Code</th>
							<th className={s.tableData}>capital</th>
						</tr>
						<tr>
							<td className={s.tableData}>{info[0]?.continent}</td>
							<td className={s.tableData}>{info[0]?.id}</td>
							<td className={s.tableData}>{info[0]?.capital}</td>
						</tr>
						<tr>
							<th className={s.tableData}>subregion</th>
							<th className={s.tableData}>area</th>
							<th className={s.tableData}>population</th>
						</tr>
						<tr>
							<td className={s.tableData}>{info[0]?.subregion}</td>
							<td className={s.tableData}>{info[0]?.area}</td>
							<td className={s.tableData}>{info[0]?.population}</td>
						</tr>
					</tbody>
				</table>
				<section>
					<h3 className={s.activitiesTitle}>Tourist Activities:</h3>
					<ul>
						{info[0].Activities?.map(el => (
							<li key={el.id} className={s.activityItem}>
								{el.name}
							</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
};

export default DetailContainer;
