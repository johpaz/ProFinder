const { Router } = require('express');
const { createPostHandler } = require('../handlers/postHandlers');

//Router
const postRouter = Router();

//Controllers

//Enrutado
postRouter.post("/", createPostHandler)

module.exports = postRouter