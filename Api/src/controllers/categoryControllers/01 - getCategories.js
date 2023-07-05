const { Category } = require('../../db');
const { Ocupation } = require('../../db');
const { Op } = require('sequelize');

const getAllCategories = async () => {

  const categories = await Category.findAll({include:{
    model: Ocupation,
    attributes: ['id','name'],
  }});

  if(!categories) throw Error (`No hay categorías a mostrar`);

  return categories;
};

const getCategoriesByName = async (name) => {

  const query = name.toLowerCase().trim();
  const formattedQuery = `%${query}%`;

  const categoriesName = await Category.findAll({
    where: {
      name: {
        [Op.iLike]: formattedQuery,
      },
    },include:{
      model: Ocupation,
      attributes: ['id','name'],
    }
  });
  
  if(categoriesName.length === 0) throw Error (`No hay categorías llamadas: ${query}`);

  return categoriesName;
};

module.exports = {
  getAllCategories, getCategoriesByName
};