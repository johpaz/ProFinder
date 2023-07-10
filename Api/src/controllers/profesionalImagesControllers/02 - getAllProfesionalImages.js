const { ProfesionalImagesPost } = require('../../db');
const axios = require('axios');

const getAllProfesionalImagesApi = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/johpaz/ApiProfinder/master/src/json/postsimages.json');
    const apiData = response.data;

    //console.log(apiData);

    // Mapear los datos de la API en el formato esperado por el modelo de Sequelize
    const normalizedPostImages = apiData.postImages.map(apiPost => {
      const normalizedPostImage = {
        image: apiPost.image, // Seleccionar la primera URL de imagen del array
        description: apiPost.content,
        ProfesionalId: apiPost.profesionalId,
      }
      return normalizedPostImage;
    });
    console.log(normalizedPostImages);

  // Crear todas las ocupaciones de una sola vez en la base de datos
  await ProfesionalImagesPost.bulkCreate(normalizedPostImages);

  console.log('Base de datos llenada exitosamente.');
} catch (error) {
  console.error('Error al llenar la base de datos:', error.message);
}
};

const getAllProfesionalImages = async () => {

  const profesionalImages = await ProfesionalImagesPost.findAll({where:{
    view: true,
  }});

  if(profesionalImages.length === 0) throw Error (`No hay posts de images a mostrar`);

  return profesionalImages;
};

module.exports = {
  getAllProfesionalImages,
  getAllProfesionalImagesApi
};