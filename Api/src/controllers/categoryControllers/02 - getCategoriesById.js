const { Category } = require('../../db');

const getCategoryById = async (id) => {

  const category = await Category.findByPk(id);

  if(!category) throw Error (`No existe una categoría de id: ${id}`);

  return category;
};

module.exports = getCategoryById;