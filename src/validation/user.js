const Joi = require('joi');

//validation for object createUser
exports.createUserSchema = Joi.object({
    username: Joi.string().max(20).alphanum().required().messages({
        'string.alphanum': 'User name should be alphanumeric',
        'string.max': 'User name must be maximum 100 letters',
        'string.required': 'User name is mandatory',
    }),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(15).required().messages({
        'string.min': 'Password must be minimum 8 characters',
        'string.max': 'Password must be maximum 15 characters',
        'string.required': 'Password is mandatory',
    }),
});

exports.userLoginSchema = Joi.object({
    username: Joi.string().min(5).max(50).required(),
    password: Joi.string().min(8).max(50).required(),
});

