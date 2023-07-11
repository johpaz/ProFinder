const { Router } = require('express');
const { getAllPostsClientsHandler, createPostHandler } = require('../handlers/postClientsHandlers');

// Middlewares

const postValidate = require('../middlewares/postClient/postValidate')

//Router
const postClientRouter = Router();

//Enrutado
postClientRouter.get("/", getAllPostsClientsHandler)
postClientRouter.post("/", postValidate,createPostHandler)

module.exports = postClientRouter