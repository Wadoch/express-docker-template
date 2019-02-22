const app = require('express')();
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger');

const routes = require('./src/routes');

const PORT = process.env.PORT || 8000;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(morgan('[:date[iso]] :method :url :status - :response-time ms'));
routes(app);

app.listen(PORT, () => {
    console.log(`Server successfully started at port ${PORT}`);
});
