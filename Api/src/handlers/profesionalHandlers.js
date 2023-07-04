const { Profesional } = require('../db');


const createUserProfesional = async (req, res) => {
    try {
      const { name, email, image, genre, years_exp, description } = req.body;
  
      // Verificación de las propiedades una por una
      if (!name) {
        return res.status(400).json({ error: 'Falta la propiedad name' });
      }
  
      if (!email) {
        return res.status(400).json({ error: 'Falta la propiedad email' });
      }
  
      if (!image) {
        return res.status(400).json({ error: 'Falta la propiedad image' });
      }
  
      if (!genre) {
        return res.status(400).json({ error: 'Falta la propiedad genre' });
      }
  
      if (!years_exp) {
        return res.status(400).json({ error: 'Falta la propiedad years_exp' });
      }
  
      if (!description) {
        return res.status(400).json({ error: 'Falta la propiedad description' });
      }
  
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
  
      // Aquí puedes realizar cualquier otra acción adicional después de crear el usuario
  
      return res.status(201).json({ user: newUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al crear el usuario' });
    }
  };


  module.exports = { 
     createUserProfesional,
 };