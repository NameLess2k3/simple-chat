const notFound = (request, response, next) => {
    const error = new Error(`Not Found - ${request.originalUrl}`)
    response.status(404);
    next(error)
}

const errorHandler = (err, request, response, next) => {
    const statusCode = res.statusCode === 200 ? 500 : response.statusCode
    response.status(statusCode)
    response.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    })
}

module.exports = {notFound, errorHandler}