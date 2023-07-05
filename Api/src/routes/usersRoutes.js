const { Router } = require('express');

// Handlers:

const { getUsers, getUser,createUserClient, putUser } = require('../handlers/usersHandlers');

const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);
usersRouter.post('/', createUserClient);


usersRouter.put('/:id', putUser);

module.exports = usersRouter;
