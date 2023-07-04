const { Router } = require('express');


const {createUserProfesional} = require ('../handlers/profesionalHandlers')

const profesionalRouter = Router();


profesionalRouter.post('/', createUserProfesional);


module.exports = profesionalRouter;