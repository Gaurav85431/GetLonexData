const express = require('express');
const user_routes = express();

const bodyParser = require('body-parser');
user_routes.use(bodyParser.json());
user_routes.use(bodyParser.urlencoded({ extended: true }));

//

const user_controller = require('../controllers/userControllers');

user_routes.get('/getData', user_controller.register_user);

module.exports = user_routes;

