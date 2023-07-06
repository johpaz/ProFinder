const { Router } = require('express');


// Handlers
const { getClientsHandler, createUserClient, putClient } = require('../handlers/clientHandlers');

//Midlewares 

const postValidate = require("../middlewares/clients/postValidate.js")

//Router
const clientRouter = Router();

//Enrutado
clientRouter.get('/', getClientsHandler);
// clientRouter.get('/:id', getUser);
clientRouter.post('/', postValidate, createUserClient);


clientRouter.put('/:id', putClient);

module.exports = clientRouter;

