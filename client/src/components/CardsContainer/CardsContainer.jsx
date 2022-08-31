import React, { useMemo } from "react";
import s from "./CardsContainer.module.css";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setActualPage } from "../../Redux/actions";

const CardsContainer = ({ list }) => {
	const dispatch = useDispatch();
	const actualPage = useSelector(state => state.pagination.actualPage);
	const countriesPerPage = useSelector(
		state => state.pagination.countriesPerPage
	);
	const lastCountry = actualPage * countriesPerPage;

	const firstCountry = lastCountry - countriesPerPage;
	const currentCountries = list.slice(firstCountry, lastCountry);
	let pages = useMemo(() => {
		let arr = [];
		for (let i = 1; i <= Math.ceil(list.length / countriesPerPage); i++) {
			arr.push(i);
		}
		return arr;
	}, [list.length, countriesPerPage]);

	return (
		<>
			<div className={s.pagination}>
				{pages.map(page => (
					<h1
						key={page}
						style={{ fontSize: "30px", cursor: "pointer" }}
						className={`${actualPage === page && s.active}`}
						onClick={() => dispatch(setActualPage(page, countriesPerPage))}
					>
						{page}
					</h1>
				))}
			</div>
			<div className={s.cardsContainer}>
				{currentCountries?.map(el => {
					return (
						<Card
							population={el.population}
							id={el.id}
							key={el.id}
							country={el.name}
							flags={el.flag}
							continents={el.continent}
						/>
					);
				})}
			</div>
		</>
	);
};

export default CardsContainer;
