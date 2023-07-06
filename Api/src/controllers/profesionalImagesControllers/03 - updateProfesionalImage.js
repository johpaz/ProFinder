const { ProfesionalImagesPost } = require('../../db');

const updateProfesionalImage = (id,image,profesionalId) => {
  if(!id) throw Error (`El id es obligatorio`);
  if(!isNaN(id)) throw Error (`El id es de formato uuid`);

  
};

module.exports = updateProfesionalImage;