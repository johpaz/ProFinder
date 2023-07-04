// Controllers:

// 

// Handlers:

const getOcupations = (req,res) => {
  return res.status(200).json({DIY: "En esta ruta se obtendran todas las ocupaciones"});
};

const getOcupation = (req,res) => {
  const { id } = req.params;
  return res.status(200).json({DIY: `En esta ruta se obtendrá una ocupación por id: ${id}`});
};

const postOcupation = (req,res) => {
  return res.status(200).json({DIY: "En esta ruta se creará una ocupación"})
};

const putOcupation = (req,res) => {
  const { id } = req.params;
  return res.status(200).json({DIY: `En esta ruta se actualizará la ocupación de id: ${id}`});
};


module.exports = {
  getOcupations, getOcupation, postOcupation, putOcupation
}