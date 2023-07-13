const { Router } = require('express');

// Handlers:

const {getAllLocations, postLocation} = require('../handlers/locationHandlers')

// Router

const locationRouter = Router();

// Enrutado:

locationRouter.get('/',getAllLocations);

locationRouter.post('/',postLocation);

module.exports = locationRouter;