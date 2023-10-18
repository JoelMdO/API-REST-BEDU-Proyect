const airportServices = require('../services/airports');

exports.loadAirportsbyICAO = async function (request, response) {
    try {
        const { icao } = request.params;
        console.log(icao);
        if (icao) {
            const token = request.headers.authorization;
            if (token) {
                const airportData = await airportServices.findICAOWithLogin(icao);
                response.json(airportData);
            } else {
                const airportData = await airportServices.findICAOWithoutLogin(icao);
                response.json(airportData);
            }
        } else {
            response.status(404).json({
                message: 'Airport not found, please review ICAO code'
            })
        }
    } catch (e) {
        console.error(e);
        response.status(500).json({
            message: 'Server error',
            messagedev: e.details,
        })
    }
}
