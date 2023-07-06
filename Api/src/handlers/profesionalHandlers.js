const { Profesional } = require('../db');

const {searchUserProfesional, getAllProfesionals,getProfById} = require ("../controllers/profesionalControllers/profesionalsControllers")
const createProfesional = require('../controllers/profesionalControllers/01 - createProfesional.js');

const getProfesionals = async (req, res) => {
  const {name}= req.query

  try {
    
    const names= name?  await searchUserProfesional(name): await getAllProfesionals();

   if(names.length===0) {res.send("The indicated Profesional's name has not been found")}
   else res.status(200).json(names)

  } catch (error) {
     res.status(400).json({ error: error.messages});
  }
};

const logicDelete=async( req,res)=>{
  const { id } = req.params;
  try {
    const dbProf= await getProfById(id);
    
    if(dbProf.length===0) {res.send("The indicated Profesional's id has not been found")}
    else res.status(200).json(dbProf)
 
  } catch (error) {
    res.status(400).json({error: error.message})
    
  }
}

const createUserProfesional = async (req, res) => {
  const { name, email, image, genre, years_exp, description, categories, ocupations } = req.body;
  
  try {
    const newUser = await createProfesional(name,email,image,genre,years_exp,description, categories,ocupations);
    return res.status(201).json({ user: newUser });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  };
  };

  module.exports = { 
     createUserProfesional,
     getProfesionals,
     logicDelete
 };