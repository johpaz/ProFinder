const { Router } = require('express');
const { getAllPostsProfesionalHandler, createPostHandler } = require('../handlers/postProfesionalHandlers');

// Middleware

const postValidate = require('../middlewares/postProfresional/postValidate')

//Router
const postProfesionalRouter = Router();

postProfesionalRouter.get("/", getAllPostsProfesionalHandler);
postProfesionalRouter.post("/",postValidate,createPostHandler)


module.exports = postProfesionalRouter