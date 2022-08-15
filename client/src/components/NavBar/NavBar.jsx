import React from "react";
import s from "./NavBar.module.css";
import Button from "../Button/Button";

const NavBar = () => {
	return (
		<header className={s.header}>
			<nav>
				<Button className={s.header__button} text="Create activity" />
			</nav>
		</header>
	);
};

export default NavBar;
