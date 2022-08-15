import React, { useEffect, useState } from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import s from "./Home.module.css";

const Home = () => {
	// .continents
	// .name.common
	// .flags[0]
	const [list, setList] = useState([]);
	useEffect(() => {
		fetch("https://restcountries.com/v3/all")
			.then(res => res.json())
			.then(data => setList(data));
	}, []);
	return (
		<div>
			<CardsContainer list={list} />
		</div>
	);
};

export default Home;
