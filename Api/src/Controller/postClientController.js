const { Profesional } = require('../models'); // Asegúrate de tener correctamente configurado el modelo Profesional

const createUser = async (req, res) => {
  try {
    const { name, email, image, genre, years_exp, description } = req.body;

    // Aquí puedes agregar cualquier validación adicional que necesites para los datos recibidos

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
  createUser
};
