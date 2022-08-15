import * as React from "react";

const Magnifying = props => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		style={{
			enableBackground: "new 0 0 16 16",
		}}
		xmlSpace="preserve"
		{...props}
	>
		<path d="M5 10c1.198 0 2.284-.441 3.147-1.146l7 7 .707-.707-7-7C9.559 7.284 10 6.198 10 5c0-2.757-2.243-5-5-5S0 2.243 0 5s2.243 5 5 5zm0-9a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
	</svg>
);

export default Magnifying;
