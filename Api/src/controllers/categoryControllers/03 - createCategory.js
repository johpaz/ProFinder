const { Category } = require('../../db');

const createCategory = async (name) => {

  const nameCategoryFormat = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  
  const newCategory = await Category.create({name: nameCategoryFormat});

  return newCategory;
};

module.exports = createCategory;