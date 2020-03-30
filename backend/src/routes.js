/**
 * Routes and Services
 */
const { celebrate, Segments, Joi } = require('celebrate')
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
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        wpp: Joi.string().required().min(8),
        city: Joi.string().required(),
        uf:Joi.required()
    })
}), OngController.create);

// Save a incident
routes.post('/incidents', IncidentController.create);

// list incidents
routes.get('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), IncidentController.index);

// list incidents by profile
routes.get('/profile', ProfileController.index);

// deloete incident
routes.delete('/incidents/:id', IncidentController.delete);
 
module.exports = routes;
