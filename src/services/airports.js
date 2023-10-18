const { Sequelize } = require('sequelize');
const { sequelize } = require('../models/sequelize');

exports.findICAOWithoutLogin = async function (icao) {
    try {
        const queryText = 'SELECT country_name, slot, icao, iata FROM airports as Airports WHERE Airports.icao =:icao;';
        const queryResult = await sequelize.query(queryText, {
            replacements: { icao },
            type: Sequelize.QueryTypes.SELECT,
            raw: true,
        });
        return queryResult;
    } catch (e) {
        console.log('Error in services', e);
        throw e;
    }
}

exports.findICAOWithLogin = async function (icao) {
    const queryText = 'SELECT country_name, slot, icao, iata, rff, ops_hours, customs, additional_info FROM airports as Airports WHERE Airports.icao =:icao;';
    const airport = await sequelize.query(queryText, {
        replacements: { icao },
        type: Sequelize.QueryTypes.SELECT,
    });
    return airport;
}

exports.findAirportID = async function (icao) {
    console.log(`findAirportID ${icao}`);
    const queryText = 'SELECT Airport_id FROM airports as Airports WHERE Airports.icao =:icao;';
    const airport = await sequelize.query(queryText, {
        replacements: { icao },
        type: Sequelize.QueryTypes.SELECT,
    });
    console.log(`findAirportID ${airport.Airport_id}`);
    return airport.Airport_id;
}