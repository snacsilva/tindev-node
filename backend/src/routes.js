const express = require('express');
const DevelopersController = require('./controllers/DevelopersController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevelopersController.index);
routes.post('/devs', DevelopersController.store);

routes.post('/devs/:idDev/likes', LikeController.store);
routes.post('/devs/:idDev/dislikes', DislikeController.store);

module.exports = routes;
