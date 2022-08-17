import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "../../Pages/LandingPage";
import HomePage from "../../Pages/HomePage.jsx";
import NavBar from "../NavBar/NavBar";
import DetailPage from "../../Pages/DetailPage";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import ActivityPage from "../../Pages/ActivityPage";

const AppRouter = () => {
	const [activeNav, setActiveNav] = useState(false);
	function handleActiveNav(boolean) {
		setActiveNav(boolean);
	}
	return (
		<Provider store={store}>
			<BrowserRouter>
				{activeNav && <NavBar />}
				<Route path="/details/:id">
					<DetailPage handleActiveNav={handleActiveNav} />
				</Route>
				<Route path={"/addActivity"}>
					<ActivityPage handleActiveNav={handleActiveNav} />
				</Route>
				<Route path="/home">
					<HomePage handleActiveNav={handleActiveNav} />
				</Route>
				<Route exact path="/">
					<LandingPage handleActiveNav={handleActiveNav} />
				</Route>
			</BrowserRouter>
		</Provider>
	);
};

export default AppRouter;
