import React, { useEffect, useState } from "react";
import Home from "../components/Home/Home.jsx";

const HomePage = ({ handleActiveNav }) => {
	useEffect(() => {
		handleActiveNav(true);
		return () => {
			handleActiveNav(false);
		};
	}, [handleActiveNav]);

	return (
		<>
			<Home />
		</>
	);
};

export default HomePage;
