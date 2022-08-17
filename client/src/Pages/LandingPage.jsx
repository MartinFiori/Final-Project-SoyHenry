import React, { useEffect } from "react";
import Landing from "../components/Landing/Landing";

function LandingPage({ handleActiveNav }) {
	useEffect(() => {
		handleActiveNav(false);
	}, [handleActiveNav]);
	return <Landing />;
}

export default LandingPage;
