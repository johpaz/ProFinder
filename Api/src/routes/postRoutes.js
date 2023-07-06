const { Router } = require('express');
const { getAllPostsClientsHandler, createPostHandler } = require('../handlers/postHandlers');

//Router
const postRouter = Router();

//Controllers

//Enrutado
postRouter.get("/", getAllPostsClientsHandler)
postRouter.post("/", createPostHandler)

module.exports = postRouter