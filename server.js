const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const router = require('./routes');

const swaggerDocument = require('./swagger.json');

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);

module.exports = app;
