const { Router } = require('express');


const {createUserProfesional,logicDelete, getProfesionals} = require ('../handlers/profesionalHandlers')

const postValidate = require('../middlewares/profesional/postValidate');

const profesionalRouter = Router();


<<<<<<< HEAD
profesionalRouter.get('/', getProfesionals);

profesionalRouter.post('/', createUserProfesional);
=======
profesionalRouter.post('/', postValidate,createUserProfesional);
>>>>>>> develop

profesionalRouter.put('/delete/:id', logicDelete)


module.exports = profesionalRouter;