const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	// defino el modelo
	sequelize.define("country", {
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		subtitle: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		currencies: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		capital: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		population: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		timeZone: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		flag: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		coatOfArms: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	});
};
