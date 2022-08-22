import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeLoading } from "../../Redux/actions";
import Button from "../Button/Button";
import s from "./Card.module.css";

const Card = ({ country, flags, continents, id, population }) => {
	const dispatch = useDispatch();
	return (
		<div className={s.card}>
			<img className={s.card__image} src={flags} alt={country} />
			<div className={s.bg__info}></div>
			<div className={s.card__info}>
				<p className={s.title}> {country}</p>
				<p className={s.continents}> {continents}</p>
				<Link
					to={`/details/${id}`}
					onClick={() => dispatch(changeLoading(true))}
				>
					<Button text="More info" />
				</Link>
			</div>
		</div>
	);
};

export default Card;
