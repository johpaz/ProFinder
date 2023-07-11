const { ProfesionalImagesPost } = require('../../db');
const axios = require('axios');

const getAllProfesionalImagesApi = () => {
  return axios.get('https://raw.githubusercontent.com/johpaz/ApiProfinder/master/src/json/postsimages.json')
  .then((response)=>{
    const galeryProfesionals = response.data.postImages;
    // console.log(galeryProfesionals)
    const promises = galeryProfesionals.map((galery)=>{
      const galeryFormat = {
        image: galery.image, // Seleccionar la primera URL de imagen del array
        description: galery.content,
        ProfesionalId: galery.profesionalId,
      }
      return ProfesionalImagesPost.findOrCreate({where:galeryFormat})
    });
    return Promise.all(promises)
    .then(()=>{
      const allGalery = ProfesionalImagesPost.findAll();
      return allGalery;
    });
  })
  .catch((error)=>{
    throw Error(error.message)
  })
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