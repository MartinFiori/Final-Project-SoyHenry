import React from "react";
import s from "./CardsContainer.module.css";
import Card from "../Card/Card";

const CardsContainer = ({ list }) => {
	return (
		<div className={s.cardsContainer}>
			{list?.map(el => {
				return (
					<Card
						id={el.name.common}
						key={el.name.common}
						country={el.name.common}
						flags={el.flags[0]}
						continents={el.continents}
					/>
				);
			})}
		</div>
	);
};

export default CardsContainer;
