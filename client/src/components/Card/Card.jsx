import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import s from "./Card.module.css";

const Card = ({ country, flags, continents, id }) => {
	return (
		<div className={s.card}>
			<img className={s.card__image} src={flags} alt={country} />
			<div className={s.bg__info}></div>
			<div className={s.card__info}>
				<p className={s.title}> {country}</p>
				<p className={s.continents}> {continents}</p>
				<Link to={`/details/${id}`}>
					<Button text="More info" />
				</Link>
			</div>
		</div>
	);
};

export default Card;
