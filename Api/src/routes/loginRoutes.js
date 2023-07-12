const { Router } = require('express');

const { sequelize } = require("../db");

const { loginUser, passportHandler }=require('../handlers/loginHandler');

const passport= require ('passport')


const loginRouter = Router();

loginRouter.post('/', loginUser)


/* loginRouter.post('/', passport.authenticate('local',{
    successRedirect : '/', //En caso de que la autenticacion es satifactoria dirigide al dashboard, por ahora va a home
    failureRedirect: '/login', // se queda en / login si la autenticacion es insatisfactoria
    failureFlash: true //mensaje flash de error activado
})); */





module.exports= loginRouter;