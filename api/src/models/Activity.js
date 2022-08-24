const { DataTypes } = require("sequelize");

module.exports = sequelize => {
	const Activity = sequelize.define("Activity", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		difficulty: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		duration: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		season: {
			type: DataTypes.ENUM("Summer", "Winter", "Autumn", "Spring"),
			allowNull: false,
		},
	});
};
