const { Router } = require('express');

const {sequelize} = require("../db");

const bcrypt= require("bcrypt");

const { registerUser }=require('../handlers/registerHandler');

const registerRouter = Router();

registerRouter.post('/', async (req,res)=>{
    const {name,email,password}= req.body;
    //bcrypt.hash(password, 8, (error, hash)=>{
      //  if (error) throw
    //})//entre 8 y 10 saltos para que sea segura pero no tome mucho tiempo
    try {
        const sql= await sequelize.query(`INSERT INTO "Users" (name,email,password) VALUES ('${name}','${email}','${password}')`)

        if(sql.length!==0){
        return res.status(201).json({message: "User created successfully"})}
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }});

module.exports = registerRouter;