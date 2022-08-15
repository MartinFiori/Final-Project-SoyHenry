import React from "react";
import s from "./CardsContainer.module.css";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";

const CardsContainer = ({ list }) => {
	return (
		<div className={s.cardsContainer}>
			{/* <button onClick={() => console.log(list)}>asd</button> */}
			{!list.length ? (
				<Spinner />
			) : (
				list.map(el => (
					<Card
						key={el.name.common}
						country={el.name.common}
						flags={el.flags[0]}
						continents={el.continents}
					/>
				))
			)}
		</div>
	);
};

export default CardsContainer;
