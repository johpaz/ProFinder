const { Router } = require('express');


const {createUserProfesional} = require ('../handlers/profesionalHandlers')

const postValidate = require('../middlewares/profesional/postValidate');

const profesionalRouter = Router();


profesionalRouter.post('/', postValidate,createUserProfesional);


module.exports = profesionalRouter;