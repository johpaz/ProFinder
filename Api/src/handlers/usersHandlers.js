// Controllers:

const createClient = require("../../Controller/createClient");

// 

// Handlers:

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
};

module.exports = {
  getUsers, getUser, postUser, putUser
}