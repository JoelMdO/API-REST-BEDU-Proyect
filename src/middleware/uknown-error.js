module.exports = function (error, request, response, next) {
    response.status(500).json({
        message: 'Unexpected error',
        messagedev: 'Error after next joi-validation',
        code: 'ERROR_NEXT_UNKNOWN',
        details: error,
    })
};