// Controllers:

// const {getAllCategories, getCategoriesByName ,getCategoryById,createCategory } = require('../controllers/categoryControllers'); 
const {getAllCategories, getCategoriesByName ,getCategoryById,createCategory } = require('../controllers/categoryControllers/index');

// Handlers:

const getCategories = async (req,res) => {
  const { name } = req.query;
  try {
    const categories = name ? await getCategoriesByName(name) : await getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(404).json({error: error.message})
  }
  // return res.status(200).json({DIY: "En esta ruta se traerían todas las categorías"})
};

const getCategory = async (req,res) => {
  const { id } = req.params;
  try {
    const category = await getCategoryById(id);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(404).json({error: error.message})
  }
  // return res.status(200).json({DIY: `En esta ruta se traerá la categoría de id: ${id}`})
};

const putCategory = (req,res) => {
  const { id } = req.params;
  return res.status(200).json({DIY: `En esta ruta se actualizará la información de la categoría de id: ${id}`})
};

const postCategory = async (req,res) => {
  const { name } = req.body;
  try {
    const newCategory = await createCategory(name);
    return res.status(201).json({categoryCreated: newCategory});
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
  // return res.status(200).json({DIY: `En esta ruta se creará una categoría de nombre: ${name}` });
};

module.exports = {
  getCategories, getCategory, putCategory, postCategory
}