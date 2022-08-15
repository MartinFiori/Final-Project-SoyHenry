import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "../../Pages/LandingPage";
import HomePage from "../../Pages/HomePage.jsx";
import NavBar from "../NavBar/NavBar";
import DetailPage from "../../Pages/DetailPage";

const AppRouter = () => {
	const [activeNav, setActiveNav] = useState(false);
	function handleActiveNav(boolean) {
		setActiveNav(boolean);
	}
	return (
		<BrowserRouter>
			{activeNav && <NavBar />}
			<Route exact path="/details/:id" component={DetailPage} />
			<Route path="/home">
				<HomePage handleActiveNav={handleActiveNav} />
			</Route>
			<Route exact path="/" component={LandingPage} />
		</BrowserRouter>
	);
};

export default AppRouter;
