import React, { useState } from "react";
import s from "./ActivityContainer.module.css";
import Walking from "../../svg/Walking";
import Button from "../Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../../Redux/actions";
import validation from "../../helpers/validation.js";

const ActivityContainer = () => {
	const countries = useSelector(state => state.countries);
	const [canSubmit, setCanSubmit] = useState(false);
	const dispatch = useDispatch();
	const [data, setData] = useState({
		name: "",
		difficulty: 1,
		season: "",
		duration: 1,
		countries: [],
	});
	const [formErrors, setFormErrors] = useState({});

	const handleInputsChange = e => {
		setData(prev => ({
			...prev,
			[e.target.name]: e.target.value.trim().toLowerCase(),
		}));
		setFormErrors(
			validation({
				...data,
				[e.target.name]: e.target.value.trim().toLowerCase(),
			})
		);
	};

	const handleSelect = e => {
		setData({
			...data,
			countries: data.countries.every(el => el !== e.target.value)
				? [...data.countries, e.target.value]
				: data.countries,
		});
		setFormErrors(
			validation({
				...data,
				countries: data.countries,
			})
		);
	};

	const handleDeleteSelect = country_name => {
		setData(actualState => ({
			...actualState,
			countries: actualState.countries.filter(el => el !== country_name),
		}));
		setFormErrors(
			validation({
				...data,
				countries: data.countries,
			})
		);
	};

	const handleSubmit = (e, formData) => {
		e.preventDefault();
		setCanSubmit(true);
		dispatch(postActivity(formData));
	};

	return (
		<div className={s.formContainer}>
			<Walking className={s.walking} />
			<form
				method="POST"
				className={s.form}
				onSubmit={e => handleSubmit(e, data)}
			>
				<h2 className={s.title}>Create Activity</h2>
				<pre style={{ fontSize: "14px", color: "white" }}>
					{JSON.stringify(formErrors, undefined, 2)}
				</pre>
				<label htmlFor="name" className={s.label}>
					Name:
				</label>
				<input
					type={"text"}
					name="name"
					value={data.name}
					onChange={e => handleInputsChange(e)}
					className={`${s.input} ${formErrors.name && s.problema}`}
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
							className={`${s.input} ${formErrors.difficulty && s.problema}`}
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
							className={`${s.input} ${formErrors.season && s.problema}`}
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
					className={`${s.input} ${formErrors.duration && s.problema}`}
				/>
				<label htmlFor="countries" className={s.label}>
					Countries:
				</label>
				<select
					name="countries"
					className={`${s.select} ${formErrors.countries && s.problema}`}
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
