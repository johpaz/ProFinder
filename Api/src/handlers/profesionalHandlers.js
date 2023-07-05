// Controllers:

const  createProfesional  = require('../controllers/profesionalController/03 - createProfesional');

// Handlers:

const createUserProfesional = async (req, res) => {
  const { name, email, image, genre, years_exp, description } = req.body;
    try {
      // Crea el usuario en la base de datos utilizando el modelo Profesional
      const newUser = await createProfesional(name, email, image, genre, years_exp, description);

      return res.status(201).json({ user: newUser });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

module.exports = { 
    createUserProfesional,
};