const { Profesional } = require('../db');


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
 };