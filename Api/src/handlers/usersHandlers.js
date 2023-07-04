const sequelize = require('sequelize');
// usersHandlers.js
const { Profesional } = require('../db');
// Resto del código...

<<<<<<< HEAD
=======
const createClient = require("../../Controller/createClient");

// 
>>>>>>> f/branch-Chris


<<<<<<< HEAD
const getUsers = async (req, res) => {
  try {
    // Lógica para obtener todos los usuarios                     
    const users = await Profesional.findAll();

    return res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Lógica para obtener un usuario por su ID
    const user = await Profesional.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

const createUser = async (req, res) => {
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

const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, image, genre, years_exp, description } = req.body;

    // Lógica para actualizar un usuario por su ID
    const user = await Profesional.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Actualiza los datos del usuario
    user.name = name;
    user.email = email;
    user.image = image;
    user.genre = genre;
    user.years_exp = years_exp;
    user.description = description;

    await user.save();

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
=======
const getUsers = (req, res) => {
  return res.status(200).json({ DIY: "En esta ruta se obtendran todos los usuarios (clientes/proveedores)" })
};

const getUser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  return res.status(200).json({ DIY: `En esta ruta se obtendrá el usuario de id: ${id}` });
};

const postUser = async (req, res) => {
  const { name, email, image, genre, rating, description, active, pro } = req.body
  try {
    const client = { name, email, image, genre, rating, description, active, pro }
    const infoClient = await createClient(client)
    return res.status(200).json(infoClient)
  } catch (error) {
    return res.status(400).json(error)
  }

};

const putUser = (req, res) => {
  const { id } = req.params;
  return res.status(200).json({ DIY: `En esta ruta se actualizará el usuario de id: ${id}` });
>>>>>>> f/branch-Chris
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  putUser
};
