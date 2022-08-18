import React from "react";
import s from "./ActivityContainer.module.css";
import Input from "../Input/Input";
import Label from "../Label/Label";

const ActivityContainer = () => {
	const difficulties = ["one", "two", "three", "four", "five"];
	const seasons = ["summer", "spring", "winter", "autumn"];
	return (
		<form method="POST" className={s.form}>
			<h2 className={s.title}>Create Activity</h2>
			<Label text="Name:" />
			<Input type="text" name="name" />
			<Label text="Difficulty:" />
			<select name="difficulty" id="" className={s.select}>
				{difficulties.map((el, i) => (
					<option key={el} value={el} className={s.option}>
						{i + 1}
					</option>
				))}
			</select>
			<Label text="Duration:" />
			<select id="" name="duration" className={s.select}>
				{seasons.map(el => (
					<option key={el} value={el} className={s.option}>
						{el}
					</option>
				))}
			</select>
		</form>
	);
};

export default ActivityContainer;
