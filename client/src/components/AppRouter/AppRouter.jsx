import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "../../Pages/LandingPage";
import HomePage from "../../Pages/HomePage.jsx";
import NavBar from "../NavBar/NavBar";
import DetailPage from "../../Pages/DetailPage";
import { Provider } from "react-redux";
import store from "../../Redux/store";

const AppRouter = () => {
	const [activeNav, setActiveNav] = useState(false);
	function handleActiveNav(boolean) {
		setActiveNav(boolean);
	}
	return (
		<Provider store={store}>
			<BrowserRouter>
				{activeNav && <NavBar />}
				<Route exact path="/details/:id" component={DetailPage} />
				<Route path="/home">
					<HomePage handleActiveNav={handleActiveNav} />
				</Route>
				<Route exact path="/" component={LandingPage} />
			</BrowserRouter>
		</Provider>
	);
};

export default AppRouter;
