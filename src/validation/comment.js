const Joi = require('joi');

//validaton for object comment
exports.commentSchema = Joi.object({
    content: Joi.string().min(5).max(1000).required().messages({
        'string.min': 'comments must be minimum 5 characters',
        'string.max': 'comments must be maximum 1000 characters',
        'string.required': 'comment text is mandatory',
    }),
});
