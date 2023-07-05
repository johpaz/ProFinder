const { Router } = require('express');


const {createUserProfesional,logicDelete, getProfesionals} = require ('../handlers/profesionalHandlers')

const profesionalRouter = Router();


profesionalRouter.get('/', getProfesionals);

profesionalRouter.post('/', createUserProfesional);

profesionalRouter.put('/delete/:id', logicDelete)


module.exports = profesionalRouter;