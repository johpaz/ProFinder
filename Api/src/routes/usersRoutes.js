const { Router } = require('express');

// Handlers:
const { getUsers, getUser, createUser, putUser } = require('../handlers/usersHandlers');

const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);
usersRouter.post('/', createUser);
usersRouter.put('/:id', putUser);

module.exports = usersRouter;
