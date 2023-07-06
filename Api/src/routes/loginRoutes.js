const { Router } = require('express');

const { sequelize } = require("../db");

const { registerUser }=require('../handlers/registerHandler');

const loginRouter = Router();

loginRouter.post('/', async (req,res)=>{
    const {email,password}= req.body;

        const sql= await sequelize.query(`SELECT * FROM "Users" where email= '${email}' AND password= '${password}'`)

        if(!sql[0].length){
         res.status(401).json({message: "Incorrect credentials"})}
        else {
        res.status(200).json({message: "Correct credentials"})
    }});

module.exports = loginRouter;