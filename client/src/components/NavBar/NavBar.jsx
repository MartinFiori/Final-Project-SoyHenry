import React from "react";
import s from "./NavBar.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<header className={s.header}>
			<nav>
				<Link to="/home">
					<Button text="Volver el menu boludito" />
				</Link>
				<Link to={"/addActivity"}>
					<Button className={s.header__button} text="Create activity" />
				</Link>
			</nav>
		</header>
	);
};

export default NavBar;
