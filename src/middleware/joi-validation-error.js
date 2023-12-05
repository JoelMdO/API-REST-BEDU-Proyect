module.exports = function (error, request, response, next) {
    if (error && error.error && error.error.isJoi) {

        response.status(400).json({
            message: 'Data entry is not valid or correct typo',
            messagedev: 'joi-validation middleware error',
            code: 'ERROR_JOI_VALIDATION',
            details: error.error.details,
        });
    } else {
        next(error);
    }
};