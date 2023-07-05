const { Router } = require('express');

// Handlers:

const { getUsers, getUser, createUserClient, putClient } = require('../handlers/clientHandlers');

const clientRouter = Router();

clientRouter.get('/', getUsers);
clientRouter.get('/:id', getUser);
clientRouter.post('/', createUserClient);


clientRouter.put('/:id', putClient);

module.exports = clientRouter;
