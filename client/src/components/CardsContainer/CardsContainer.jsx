import React from "react";
import Card from "../Card/Card";

const CardsContainer = ({ list }) => {
	// .continents
	// .name.common
	// .flags[1]
	return (
		<div>
			<button onClick={() => console.log(list)}>asd</button>
			{list?.map(el => (
				<Card
					key={el.name.common}
					country={el.name.common}
					flags={el.flags[0]}
					continents={el.continents}
				/>
			))}
		</div>
	);
};

export default CardsContainer;
