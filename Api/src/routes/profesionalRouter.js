const { Router } = require('express');


const {createUserProfesional,logicDelete, getProfesionals} = require ('../handlers/profesionalHandlers')

const postValidate = require('../middlewares/profesional/postValidate');

const profesionalRouter = Router();


profesionalRouter.get('/', getProfesionals);

profesionalRouter.post('/', postValidate,createUserProfesional);

profesionalRouter.put('/delete/:id', logicDelete)


module.exports = profesionalRouter;