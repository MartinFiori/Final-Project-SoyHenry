import React from "react";
import s from "./Landing.module.css";
import WorldSVG from "../../svg/WorldSVG";
import { Link } from "react-router-dom";
function Landing({ setActiveNav }) {
	return (
		<div className={s.landing}>
			<h1 className={s.title}>
				Let's find <br /> your country!
			</h1>
			<Link className={s.button} to={"/home"}>
				Main menu
			</Link>
			<div className={s.world}>
				<WorldSVG
					circleColor={"#215bf0"}
					lineColor={"#215bf0"}
					countryColor={"#252939"}
				/>
			</div>
		</div>
	);
}

export default Landing;
