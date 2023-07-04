// Controllers:

// 

// Handlers:

const getUsers = (req,res) => {
  return res.status(200).json({ DIY: "En esta ruta se obtendran todos los usuarios (clientes/proveedores)"})
};

const getUser = (req,res) => {
  const {id} = req.params;
  return res.status(200).json({DIY: `En esta ruta se obtendrá el usuario de id: ${id}`});
};

const postUser = (req,res) => {
  return res.status(200).json({DIY: "En esta ruta se creará el usuario"});
};

const putUser = (req,res) => {
  const { id } = req.params;
  return res.status(200).json({DIY: `En esta ruta se actualizará el usuario de id: ${id}`});
};

module.exports = {
  getUsers, getUser, postUser, putUser
}