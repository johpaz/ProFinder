const { Router } = require('express');

// Handlers: 

const {createUserProfesional,logicDelete, getProfesionals} = require ('../handlers/profesionalHandlers')

// Middleware: 
const postValidate = require('../middlewares/profesional/postValidate');

// Router:

const profesionalRouter = Router();

// Enrutado:

profesionalRouter.get('/', getProfesionals);

profesionalRouter.post('/', createUserProfesional);

profesionalRouter.post('/', postValidate,createUserProfesional);

profesionalRouter.put('/delete/:id', logicDelete);

module.exports = profesionalRouter;