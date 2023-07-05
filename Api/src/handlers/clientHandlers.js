const sequelize = require('sequelize');
// usersHandlers.js
const { Profesional, Client } = require('../db');
const createClient = require('../controllers/createClient');
const updateClient = require('../controllers/updateClient');
// Resto del código...



const getUsers = async (req, res) => {
  try {
    // Lógica para obtener todos los usuarios                     

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



const createUserClient = async (req, res) => {
  const { name, email, image, genre, description } = req.body;
  try {

    const clientCreated = await createClient(name, email, image, genre, description)

    //constante donde guardo lo que retorna el controller createClient y envio la respuesta

    return res.status(201).json(clientCreated);
  } catch (error) {
    //En caso de que falten datos, se envia la respuesta con un mensaje de error
    return res.status(500).json({ error: error.message });
  }
};
const putClient = async (req, res) => {
  const { id } = req.params;
  const { name, email, image, genre, description } = req.body;
  //Guardamos la info de req.body en un objeto, para trabajar mas organizado cuando la funcion reciba el id y el mismo objeto.
  const clientInfo = { name, email, image, genre, description }
  try {
    const updatedClient = await updateClient(clientInfo, id)


    return res.status(200).json(updatedClient);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

module.exports = {
  getUsers,
  getUser,
  putClient,
  createUserClient,
};
