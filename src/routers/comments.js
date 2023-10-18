const express = require('express');
const router = express.Router();
const controller = require('../controllers/comment');
const validator = require('../middleware/joi-express-validation');
const { commentSchema } = require('../validation/comment');
const passportJwt = require('../middleware/passport-jwt');

router.get('/getComments/:icao', passportJwt, controller.getComments);
router.post('/createComment/:icao', passportJwt, validator.body(commentSchema), controller.createComments);


module.exports = router;