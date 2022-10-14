const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
        message: err.message,
        stac: process.env.NODE_ENV === 'devolopment' ? null : err.stack
    })
}
module.exports = {
    errorHandler,
}