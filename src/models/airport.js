const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define('Airport', {
    country_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    icao: {
        type: DataTypes.STRING(4),
        allowNull: false,
        unique: true,
    },
    iata: {
        type: DataTypes.STRING(3),
        allowNull: false,
        unique: true,
    },
    rff: {
        type: DataTypes.STRING(100),
    },
    ops_hours: {
        type: DataTypes.STRING(100),
    },
    customs: {
        type: DataTypes.STRING(100),
    },
    slot: {
        type: DataTypes.STRING(100),
    },
    additional_info: {
        type: DataTypes.STRING(100),
    }
},
    {
        tableName: 'airports',
        timestamps: false,
    });




