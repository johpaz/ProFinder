const { Router } = require('express');

// Handlers:

const { getUsers, getUser, postUser, putUser } = require('../handlers/usersHandlers');

// Middlewares en caso de usar:

//? const postValidate = require('../middlewares/postValidate'); 

// Router

const usersRouter = Router();

// Enrutado:

usersRouter.get('/',getUsers);
usersRouter.get('/:id',getUser);
usersRouter.post('/',postUser);
usersRouter.put('/:id',putUser);

module.exports = usersRouter;