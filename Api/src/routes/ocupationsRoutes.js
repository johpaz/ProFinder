const { Router } = require('express');

// Handlers:

const { getOcupations, getOcupation, postOcupation, putOcupation,
} = require('../handlers/ocupationsHandlers');

// Middlewares en caso de usar:

// 

// Router:

const ocupationRouter = Router();

// Enrutado:

ocupationRouter.get('/',getOcupations);
ocupationRouter.get('/',getOcupation);
ocupationRouter.post('/',postOcupation);
ocupationRouter.put('/',getOcupation);

module.exports = ocupationRouter;