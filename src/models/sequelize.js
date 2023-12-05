require('dotenv').config();
const { Sequelize } = require('sequelize');

// SQLite connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DATABASE,
});

exports.sequelize = sequelize;


exports.connect = async function () {
    try {
        await sequelize.authenticate();

    } catch (e) {


    }
};

//update the database
exports.update = async function () {
    try {
        await sequelize.sync({ force: false });

    } catch (e) {


    }
};
