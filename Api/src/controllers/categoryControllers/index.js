const { getAllCategories, getCategoriesByName } = require('./01 - getCategories');
const getCategoryById = require('./02 - getCategoriesById');
const createCategory = require('./03 - createCategory');

module.exports = {
  getAllCategories,getCategoriesByName,getCategoryById,
  createCategory
}