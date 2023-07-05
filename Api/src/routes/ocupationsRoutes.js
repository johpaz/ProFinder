const { Router } = require('express');

// Handlers:

const { getOcupations, getOcupation, postOcupation, putOcupation,
} = require('../handlers/ocupationsHandlers');

// Middlewares en caso de usar:

const postValidate = require('../middlewares/ocupation/postValidate');

// Router:

const ocupationRouter = Router();

// Enrutado:

ocupationRouter.get('/',getOcupations);
ocupationRouter.get('/',getOcupation);
ocupationRouter.post('/',postValidate,postOcupation);
ocupationRouter.put('/:id',getOcupation);

module.exports = ocupationRouter;