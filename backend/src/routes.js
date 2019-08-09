const express = require('express');
const DevelopersController = require('./controllers/DevelopersController');
const LikeController = require('./controllers/LikeController');

const routes = express.Router();

routes.post('/devs', DevelopersController.store);
routes.post('/devs/:idDev/likes', DevelopersController.store);

module.exports = routes;
