import React from "react";
import s from "./Sorts.module.css";
import { setSort } from "../../Redux/actions";
import { useDispatch } from "react-redux";

const Sorts = () => {
	const dispatch = useDispatch();
	const handleSort = value => {
		dispatch(setSort(value));
	};
	return (
		<section className={s.sorts}>
			<h4 className={s.title}>Sort by:</h4>
			<label className={s.labelCountry}>Country:</label>
			<select
				className={s.select}
				// defaultValue="defaultCountry"
				onChange={e => handleSort(e.target.value)}
			>
				<option className={s.option} value="defaultCountry" disabled>
					Country's name:
				</option>
				<option className={s.option} value="COUNTRY_ASC">
					A - Z
				</option>
				<option className={s.option} value="COUNTRY_DESC">
					Z - A
				</option>
			</select>
			<label className={s.labelPopulation}>Population:</label>
			<select
				defaultValue="defualtPopulation"
				className={s.select}
				onChange={e => handleSort(e.target.value)}
			>
				<option className={s.option} value="defualtPopulation" disabled>
					Country's population
				</option>
				<option className={s.option} value="POPULATION_ASC">
					Highest - Lowest
				</option>
				<option className={s.option} value="POPULATION_DESC">
					Lowest - Highest
				</option>
			</select>
		</section>
	);
};

export default Sorts;
