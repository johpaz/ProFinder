const { Router } = require('express');

const { sequelize } = require("../db");

const { loginUser }=require('../handlers/loginHandler');




const loginRouter = Router();


loginRouter.post('/', loginUser);





module.exports= loginRouter;// 4ef29225941cb9bb0ea93f9cae9b3bcb614f46f8