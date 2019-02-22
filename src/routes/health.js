const router = require('express').Router();

const { healthCheckHandler } = require('../handlers/health');

router.get('/', healthCheckHandler);

module.exports = router;