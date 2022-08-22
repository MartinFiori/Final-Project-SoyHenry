const { DataTypes } = require("sequelize");

module.exports = sequelize => {
	sequelize.define("activities", {
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
