const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');
const validator = require('../middleware/joi-express-validation');
const { createUserSchema, userLoginSchema } = require('../validation/user');

router.get('/user/:username', controller.getUser);
router.post('/createUser', validator.body(createUserSchema), controller.createUser);
router.post('/login', validator.body(userLoginSchema), controller.login);

module.exports = router;