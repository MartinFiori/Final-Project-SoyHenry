import React from "react";
import s from "./Home.module.css";
import WorldSVG from "../../svg/WorldSVG";
import { Link } from "react-router-dom";
function Home() {
	return (
		<div className={s.landing}>
			<div>
				<h1 className={s.title}>Let's find your country!</h1>
				<button>
					<Link to={"/"}>Main menu</Link>
				</button>
			</div>
			<WorldSVG
				circleColor={"#215bf0"}
				lineColor={"#215bf0"}
				countryColor={"#252939"}
			/>
		</div>
	);
}

export default Home;
