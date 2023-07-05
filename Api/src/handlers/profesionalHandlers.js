const { Profesional } = require('../db');

const {searchUserProfesional, getAllProfesionals,getProfById} = require ("../Controller/profesionalsControllers")


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
    try {
      const { name, email, image, genre, years_exp, description } = req.body;

      // Aquí puedes agregar cualquier otra validación adicional que necesites para los datos recibidos
  
      // Crea el usuario en la base de datos utilizando el modelo Profesional
      const newUser = await Profesional.create({
        name,
        email,
        image,
        genre, 
        years_exp,
        description,
        active: true,
        pro: true
      });

      if(!newUser) throw Error (`No se pudo crear un usuario`)
  
      // Aquí puedes realizar cualquier otra acción adicional después de crear el usuario
  
      return res.status(201).json({ user: newUser });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

  module.exports = { 
     createUserProfesional,
     getProfesionals,
     logicDelete
 };