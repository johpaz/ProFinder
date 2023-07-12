const bcrypt= require("bcrypt");
//const {sequelize}= require("sequelize")
const {sequelize} = require("../db");
const passport = require('passport');
const query= require("sequelize")
const LocalStrategy= require ('passport-local');
const {User}= require("../db")



 const loginUser=async (req,res)=>{
    const {email,password}= req.body;
    const sql= await sequelize.query(`SELECT * FROM "Users" where email= '${email}'`);
  
    try {
        if (!sql[0].length){res.status(400).json({message:"The email has not been found"})};

        if (sql[0][0]){ 
            bcrypt.compare( password, sql[0][0].password, (error,resultado)=>{
            if(error) throw error;
            if(resultado){ res.status(200).json({message:"User login successfully"})}
            else {res.status(401).json({message: "The password is invalid"})}
            }
          ) 
        }

    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
    }; 




/* const passportHandler=  (passport)=>{
    passport.serializeUser(function(user,done){done(null,user)});

    passport.deserializeUser(function(obj,done){ done(null,obj)});

    passport.use(new LocalStrategy(function (username, password, cb) {
       const sql= sequelize.query(`SELECT * FROM "Users" WHERE email = '${username}'`,[username])
        
        console.log(sql)
        
        /* , [ username ], function(err, user) {
          if (err) { return cb(err); }
          if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }
      
          bcrypt.compare(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
            console.log(user)
            if (err) { return cb(err); }
            if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
              return cb(null, false, { message: 'Incorrect username or password.' });
            }
            return cb(null, user);
          });
        } */;
    
        
    





module.exports = { loginUser};



