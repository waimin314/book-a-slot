const config = require('./server/utils/config');
const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');
const middleware = require('./server/utils/middleware');
const logger = require('./server/utils/logger');
const mongoose = require('mongoose');

logger.info('connection to', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info('connected to mongoDB');
  })
  .catch((err) => {
    logger.error('error connecting to mongoDB: ', err.message);
  });

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
