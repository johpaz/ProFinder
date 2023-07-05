const { Ocupation } = require('../../db');

const updateOcupation = async (id,newName, newCategoryId) => {

  const ocupationToUpdate = await Ocupation.findByPk(id);

  if(!ocupationToUpdate) throw Error (`No se encontró la ocupación de id: ${id}`);

  const nameOcupationFormat = newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase();

  const ocupationUpdated = {
    name : ocupationToUpdate.name || nameOcupationFormat,
    categoryId: ocupationToUpdate.categoryId || newCategoryId
  }
  await ocupationToUpdate.update();

  return ocupationUpdated;
};

module.exports = updateOcupation;