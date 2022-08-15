import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "../../Pages/LandingPage";
import HomePage from "../../Pages/HomePage.jsx";
import NavBar from "../NavBar/NavBar";

const AppRouter = () => {
	const [activeNav, setActiveNav] = useState(false);
	function handleActiveNav(boolean) {
		setActiveNav(boolean);
	}
	return (
		<BrowserRouter>
			{activeNav && <NavBar />}
			<Route path="/home">
				<HomePage handleActiveNav={handleActiveNav} />
			</Route>
			<Route exact path="/" component={LandingPage} />
		</BrowserRouter>
	);
};

export default AppRouter;
