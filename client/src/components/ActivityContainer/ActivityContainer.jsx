import React from "react";
import s from "./ActivityContainer.module.css";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Walking from "../../svg/Walking";
import Button from "../Button/Button.jsx";
import { useSelector } from "react-redux";
// import { validation } from "../../helpers/validation.js";

const ActivityContainer = () => {
	const countries = useSelector(state => state.countries);
	const difficulties = ["one", "two", "three", "four", "five"];
	const seasons = ["Summer", "Spring", "Winter", "Autumn"];
	return (
		<div className={s.formContainer}>
			<Walking className={s.walking} />
			<form method="POST" className={s.form}>
				<h2 className={s.title}>Create Activity</h2>
				<Label text="Name:" />
				<Input type="text" name="name" />
				<section className={s.selectContainer}>
					<div>
						<Label text="Difficulty:" />
						<select name="difficulty" className={s.select}>
							<option value={"default"} className={s.option} disabled>
								Choose a difficulty
							</option>
							{difficulties.map((el, i) => (
								<option key={el} value={el} className={s.option}>
									{i + 1}
								</option>
							))}
						</select>
					</div>
					<div>
						<Label text="Season:" />
						<select
							id=""
							name="season"
							className={s.select}
							defaultValue={"default"}
						>
							<option value={"default"} className={s.option} disabled>
								Choose a season
							</option>
							{seasons.map(el => (
								<option key={el} value={el} className={s.option}>
									{el}
								</option>
							))}
						</select>
					</div>
				</section>
				<Label text="Duration: (in minutes)" />
				<Input type="number" name="duration" />
				<Label text="Countries:" />
				<select
					name="countries"
					id=""
					className={s.select}
					defaultValue={"default"}
				>
					<option value={"default"} className={s.option} disabled>
						Choose an option
					</option>
					{countries.map(el => (
						<option
							key={el.name.common}
							value={el.name.common}
							className={s.option}
						>
							{el.name.common}
						</option>
					))}
				</select>
				<Button text="Create" propClass="formButton" />
			</form>
		</div>
	);
};

export default ActivityContainer;
