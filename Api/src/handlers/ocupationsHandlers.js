// Controllers:

const {getAllOcupations, getOcupationsByName, createOcupation } = require('../controllers/ocupationControllers/index');

// Handlers:

const getOcupations = async (req,res) => {
  const { name } = req.query;
  try {
    const ocupations = name ? await getOcupationsByName(name) : await getAllOcupations();
    return res.status(200).json(ocupations);
  } catch (error) {
    return res.status(404).json({error: error.message});
  }
  // return res.status(200).json({DIY: "En esta ruta se obtendran todas las ocupaciones"});
};

const getOcupation = (req,res) => {
  const { id } = req.params;
  return res.status(200).json({DIY: `En esta ruta se obtendrá una ocupación por id: ${id}`});
};

const postOcupation = async (req,res) => {
  const {name,categoryId} = req.body;
  try {
    const newOcupation = await createOcupation(name,categoryId);
    return res.status(201).json(newOcupation);
  } catch (error) {
    return res.status(404).json({error: error.message});
  }
  // return res.status(200).json({DIY: "En esta ruta se creará una ocupación"})
};

const putOcupation = (req,res) => {
  const { id } = req.params;
  const { name, categoryId} = req.body;
  try {
    
  } catch (error) {
    
  }
  return res.status(200).json({DIY: `En esta ruta se actualizará la ocupación de id: ${id}`});
};


module.exports = {
  getOcupations, getOcupation, postOcupation, putOcupation
}