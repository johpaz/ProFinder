const {sequelize} = require("../db");
const { Users } = require('../db');





const registerUser= async (req,res)=>{
    const {name,email,password}= req.body;
    
    try {
        const sql= await sequelize.query(`INSERT INTO "Users" (name,email,password) VALUES ('${name}','${email}','${password}')`)

        if(sql.length!==0){
        return res.status(201).json({message: "User created successfully"})}
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}

module.exports = registerUser;