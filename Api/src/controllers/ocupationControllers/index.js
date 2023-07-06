const createOcupation = require('./03 - createOcupation');
const { getAllOcupations, getOcupationsByName} = require('./01 - getOcupations');
const updateOcupation = require('./04 - putOcupation');
const getOcupationById = require('./02 - getOcupationById');

module.exports = {
  getAllOcupations, getOcupationsByName,
  getOcupationById,
  createOcupation,
  updateOcupation
};