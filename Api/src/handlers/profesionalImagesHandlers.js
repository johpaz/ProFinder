// Controllers:

const createProfesionalImage = require('../controllers/profesionalImagesControllers/01 - createProfesionalImage');
const getAllProfesionalImages = require('../controllers/profesionalImagesControllers/02 - getAllProfesionalImages');
const updateProfesionalImage = require('../controllers/profesionalImagesControllers/03 - updateProfesionalImage');
const profesionalImageById = require('../controllers/profesionalImagesControllers/04 - getProfesionalImageById');

// Handlers:

const getProfesionalImages = async (req,res) => {
  try {
    const profesionalImages =  await getAllProfesionalImages();
    return res.status(200).json(profesionalImages);
  } catch (error) {
    return res.status(404).json({error: error.message});
  }
  // return res.status(200).json({DIY: "En esta ruta se obtendran todas las ocupaciones"});
};

const getProfesionalImage = async (req,res) => {
  const { id } = req.params;
  try {
    const profesionalImage = await profesionalImageById(id);
    return res.status(200).json(profesionalImage);
  } catch (error) {
    return res.status(404).json({error : error.message});
  }
  // return res.status(200).json({DIY: `En esta ruta se obtendrá una ocupación por id: ${id}`});
};

const postProfesionalImage = async (req,res) => {
  const {image, description ,profesionalId} = req.body;
  try {
    const newProfesionalImage = await createProfesionalImage(image,description,profesionalId);
    return res.status(201).json(newProfesionalImage);
  } catch (error) {
    return res.status(404).json({error: error.message});
  }
  // return res.status(200).json({DIY: "En esta ruta se creará una ocupación"})
};

const putProfesionalImage = async (req,res) => {
  const { id } = req.params;
  const { image, description, view, profesionalId } = req.body;
  try {
    const updatedProfesionalImage = await updateProfesionalImage(id ,image, description, view , profesionalId);
    // console.log(updatedProfesionalImage);
    return res.status(202).json({updatedProfesionalImage});
  } catch (error) {
    return res.status(404).json({error: error.message});
  }
  // return res.status(200).json({DIY: `En esta ruta se actualizará la profesionalImage de id: ${id}`});
};


module.exports = {
  getProfesionalImages, getProfesionalImage, postProfesionalImage, putProfesionalImage
}