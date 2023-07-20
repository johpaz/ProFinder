const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const {sequelize} = require("../../db");

var {config}= require('dotenv');
const bcrypt= require("bcrypt");

const {loginUser}= require('../../handlers/loginHandler.js');
const { json } = require('sequelize');

config();




const allEmails= async()=>{
  const allemails= await sequelize.query('SELECT email FROM "Users" ')

  const emailsdb=[];
  
  for (var i = 0; i < allemails[0].length; i++){
    const newEmail= allemails[0][i].email;
    emailsdb.push(newEmail);
  } return (emailsdb)
};



const loginUserGoogle= async (emailFromGoogle) =>{

const email = emailFromGoogle;
const sql= await sequelize.query(`SELECT * FROM "Users" where email= '${email}'`)

return (json({usuario:sql[0][0].usuario,
 }))}




const correspondingTable= async (usuario,emailFromGoogle)=>{
  const email = emailFromGoogle;
const loginClient= await sequelize.query(`SELECT * FROM "Clients" WHERE "email"= '${email}'`);
        return (loginClient[0][0].id)




}







const execute= async (accessToken, refreshToken, profile, done) =>{
  const emails= await allEmails();

  const response= emails.includes(profile.emails[0].value);
  
  if (response){console.log('si hay res')


  const emailFromGoogle= profile.emails[0].value;

  const usuario= await loginUserGoogle(emailFromGoogle);
  const id= await correspondingTable(usuario,emailFromGoogle)
const userData={
  usuario:usuario,
id: id

};

  // if(usuario){console.log('si entro a usuario'+' '+usuario+'su id es '+ id)}
 if(id){console.log('si entro a id'+' '+id)}


  //console.log(profile.emails[0].value)


    done(null,userData)
  


  } else { console.log('nohay res')
    done(null, profile)
  }
};
   


const authgoogle =new GoogleStrategy ({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google"//primera autentica y por ahora lleva a home
  }, execute)



module.exports= authgoogle


