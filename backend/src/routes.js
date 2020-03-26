/**
 * Routes and Services
 */

const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


/**
 * Session routes
 */

routes.post('/sessions', SessionController.login);


/**
 * 
 */


// List all  ongs
routes.get('/ongs', OngController.index);

// Save a  station
routes.post('/ongs', OngController.create);

// Save a incident
routes.post('/incidents', IncidentController.create);

// list incidents
routes.get('/incidents', IncidentController.index);

// list incidents by profile
routes.get('/profile', ProfileController.index);

// deloete incident
routes.delete('/incidents/:id', IncidentController.delete);
 
module.exports = routes;
