const bcrypt= require("bcrypt");

const {sequelize} = require("../db");



const userRegister= async (req,res)=>{
    const {name,email,password}= req.body;

    bcrypt.hash(password, 8, async (error, hash)=>{

       if (error) {res.status(400).json({error: error.message})};

       try {
        const sql= await sequelize.query(`INSERT INTO "Users" (name,email,password) VALUES ('${name}','${email}','${hash}')`)
        if(sql.length!==0){
        return res.status(201).json({message: "User created successfully"})};

       } catch (error) {
        res.status(400).json({error: error.message});
       };
    })
    };

module.exports = {userRegister};