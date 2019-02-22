module.exports.healthCheckHandler = (req, res) => {
    res.json({
        status: 200,
        message: 'OK',
    });
};