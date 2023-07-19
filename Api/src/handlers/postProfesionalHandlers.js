//Controllers
const { createPostProfesional, getAllPostsByProfesionals, getAllPostsByProfesionalsApi,updatePostProfesional,getPostProfesionalById } = require("../controllers/postProfesionalcontrollers/index")
//Handlers

const getAllPostsProfesionalHandler = async (req, res) => {
  try {
    const allPosts = await getAllPostsByProfesionalsApi();
    return res.status(200).json(allPosts);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const getPostProfesionalId = async (req,res) => {
  const { id } = req.params;
  try {
    const postProfesional = await getPostProfesionalById(id);
    return res.status(200).json(postProfesional);
  } catch (error) {
    return res.status(404).json({error : error.message});
  }
};

const createPostHandler = async (req, res) => {
  const { title, image, categories, ocupations, content, ProfesionalId } = req.body
  try {
    const post = await createPostProfesional(title, categories, ocupations, image, content, ProfesionalId)
    return res.status(201).json(post)
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message })
  }
}


const putPostProfesional = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { title, image, content,  ProfesionalId,categories, ocupations } = req.body;
  
  try {
        
    const updatedPostProfesional = await updatePostProfesional(id, title, image, content, ProfesionalId, categories, ocupations);
    
    return res.status(200).json(updatedPostProfesional );
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error: error.message });
  }
};




module.exports = {
  getAllPostsProfesionalHandler,
  createPostHandler,
  putPostProfesional,
  getPostProfesionalId
}