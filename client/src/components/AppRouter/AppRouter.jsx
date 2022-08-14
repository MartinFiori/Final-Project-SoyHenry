import React from "react";
import HomePage from "../../Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" component={HomePage} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
