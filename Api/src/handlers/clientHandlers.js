const sequelize = require('sequelize');
// usersHandlers.js
const { Profesional, Client } = require('../db');
const { getClients, createClient, updateClient, getClientById, logicDeleteClient } = require("../controllers/clientController/index")
// Resto del código...



const getClientsHandler = async (req, res) => {

  const clients = await getClients()
  try {
    // Lógica para obtener todos los usuarios                     

    return res.status(200).json(clients);
  } catch (error) {
    return res.status(204).json({ error: 'Error al obtener los usuarios' });
  }
};

const getClientByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const clientFound = await getClientById(id)
    // Lógica para obtener un usuario por su ID

    return res.status(200).json({ clientFound });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};



const createUserClient = async (req, res) => {
  const { name, email, phone, image, genre, description, ubication } = req.body;
  try {
    
    const clientCreated = await createClient(name, email, phone, image, genre, description,ubication)

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

const logicDeleteHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const dbProf = await logicDeleteClient(id);

    if (dbProf.length === 0) { res.send("The indicated Profesional's id has not been found") }
    else res.status(200).json(dbProf)

  } catch (error) {
    res.status(400).json({ error: error.message })

  }
}

module.exports = {
  getClientsHandler,
  getClientByIdHandler,
  putClient,
  createUserClient,
  logicDeleteHandler
};
