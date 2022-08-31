import React, { useState } from "react";
import s from "./ActivityContainer.module.css";
import Walking from "../../svg/Walking";
import Button from "../Button/Button.jsx";
import { useSelector } from "react-redux";
// import { validation } from "../../helpers/validation.js";

const ActivityContainer = () => {
	const countries = useSelector(state => state.countries);
	const [data, setData] = useState({
		name: "",
		difficulty: 1,
		season: "",
		duration: 0,
		countries: [],
	});

	// const [error, setError] = useState({});
	const handleInputsChange = e => {
		console.log(e.target);
		setData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
		// setError({
		// 	...data,
		// 	[e.target.name]: e.target.value,
		// });
	};

	const handleSelect = e => {
		setData({
			...data,
			countries: data.countries.every(el => el !== e.target.value)
				? [...data.countries, e.target.value]
				: data.countries,
		});
	};

	const handleDeleteSelect = country_name => {
		setData(actualState => ({
			...actualState,
			countries: actualState.countries.filter(el => el !== country_name),
		}));
	};

	return (
		<div className={s.formContainer}>
			<Walking className={s.walking} />
			<form method="POST" className={s.form} onSubmit={e => e.preventDefault()}>
				<h2 className={s.title}>Create Activity</h2>
				<label htmlFor="name" className={s.label}>
					Name:
				</label>
				<input
					type={"text"}
					name="name"
					value={data.name}
					onChange={e => handleInputsChange(e)}
					className={s.input}
				/>
				<div className={s.selectContainer}>
					<div>
						<label htmlFor="difficulty" className={s.label}>
							Difficulty:
						</label>
						<input
							type="number"
							name="difficulty"
							value={data.difficulty}
							onChange={e => handleInputsChange(e)}
							className={s.input}
						/>
					</div>
					<div>
						<label htmlFor="season" className={s.label}>
							Season:
						</label>
						<input
							type="text"
							name="season"
							value={data.season}
							onChange={e => handleInputsChange(e)}
							className={s.input}
						/>
					</div>
				</div>
				<label htmlFor="duration" className={s.label}>
					Duration: (in minutes)
				</label>
				<input
					type="number"
					value={data.duration}
					name="duration"
					onChange={e => handleInputsChange(e)}
					className={s.input}
				/>
				<label htmlFor="countries" className={s.label}>
					Countries:
				</label>
				<select
					name="countries"
					className={s.select}
					defaultValue="default"
					onChange={e => handleSelect(e)}
				>
					<option value="default" hidden disabled>
						Choose:
					</option>
					{countries
						?.sort((a, b) => a.name.localeCompare(b.name))
						.map(el => (
							<option key={el.name} value={el.name} className={s.option}>
								{el.name}
							</option>
						))}
				</select>
				<ul className={`${data.countries.length && s.countriesContainer}`}>
					{data.countries?.map(el => (
						<li
							key={el}
							className={s.countriesName}
							onClick={() => handleDeleteSelect(el)}
						>
							<p>{el} &times;</p>
						</li>
					))}
				</ul>
				<Button text="Create" propClass="formButton" />
			</form>
		</div>
	);
};

export default ActivityContainer;
