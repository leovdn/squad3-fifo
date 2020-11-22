const express = require('express');
const santosRoutes = require('./santos.routes');
const saoPauloRouter = require('./saoPaulo.routes');
const saoPauloRoutes = require('./saoPaulo.routes');

const routes = express.Router();   

routes.use('/santos', santosRoutes);
routes.use('/sp', saoPauloRouter);

module.exports = routes;