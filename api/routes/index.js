const myController = require('../controllers');

const routes = require('express').Router();

routes.get('/', myController.awesomeFunction);
routes.get('/anotherPerson', myController.anotherPerson)

module.exports = routes;