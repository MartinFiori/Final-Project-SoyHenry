const { DataTypes } = require("sequelize");

module.exports = sequelize => {
	const Activity = sequelize.define("Activity", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
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
			type: DataTypes.ENUM("summer", "winter", "autumn", "spring"),
			allowNull: false,
		},
		countries: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
		},
	});
};
