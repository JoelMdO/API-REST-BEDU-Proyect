const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("comment", {
    comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [5, 1000],
        },
    },
    User_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
    Airport_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
}, {
    tableName: 'comments',
    timestamps: false,
});