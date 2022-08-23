import React, { useState, useEffect } from "react";
import s from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../Redux/actions";

const Filters = () => {
	const dispatch = useDispatch();
	const filtersRedux = useSelector(state => state.filters);
	const countries = useSelector(state => state.countries);
	const [continents, setContinents] = useState([]);
	const [activeFilter, setActiveFilter] = useState(filtersRedux);
	const filters = [
		{ name: "continents", filterTypes: continents },
		{ name: "activities", filterTypes: ["caminar", "comer", "pasear"] },
		{ name: "comidas", filterTypes: ["pancho", "empanadas", "pizza"] },
	];
	const handleSetFilter = (filterType, value) => {
		dispatch(setFilters({ [filterType]: value }));
		setActiveFilter({
			...activeFilter,
			[filterType]: value,
		});
	};

	useEffect(() => {
		!continents.length &&
			setContinents([...new Set(countries.map(el => el.continents[0]))]);
	}, [countries, continents]);

	return (
		<form className={s.filterContainer} onSubmit={e => e.preventDefault()}>
			{filters?.map(filter => (
				<div className={s.filter} key={filter.name}>
					<h4 className={s.title}>{filter.name}</h4>
					<div className={s.filterContent}>
						{filter.filterTypes?.map(type => (
							<label
								htmlFor={type}
								onClick={e => handleSetFilter(filter.name, e.target.value)}
								name={type}
								value={type}
								className={`${s.label} ${
									activeFilter[filter.name] === type && `${s.active}`
								}`}
								key={type}
							>
								{type}
								<input
									type="radio"
									name={filter.name}
									id={type}
									value={type}
									className={s.radio}
								/>
							</label>
						))}
					</div>
				</div>
			))}
			<input
				type="reset"
				value="Reset filters"
				className={s.resetFilters}
				onClick={() => setActiveFilter({})}
			/>
		</form>
	);
};

export default Filters;
