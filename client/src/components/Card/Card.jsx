import React from "react";
import s from "./Card.module.css";

const Card = ({ country, flags, continents }, props) => {
	return (
		<div className={s.card}>
			<img className={s.card__image} src={flags} alt={country} />
			<div className={s.card__info}>
				<p style={{ fontSize: "2rem" }}> {country}</p>
				<p style={{ fontSize: "1rem" }}> {continents}</p>
			</div>
		</div>
	);
};

export default Card;
