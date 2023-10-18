const express = require('express');
const router = express.Router();
const controller = require('../controllers/airport');
const passportJwt = require('../middleware/passport-jwt');

router.get('/airport/:icao', controller.loadAirportsbyICAO);


module.exports = router;