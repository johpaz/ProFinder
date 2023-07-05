const createOcupation = require('./03 - createOcupation');
const { getAllOcupations, getOcupationsByName} = require('./01 - getOcupations');
const updateOcupation = require('./04 - putOcupation');

module.exports = {
  getAllOcupations, getOcupationsByName,
  createOcupation,
  updateOcupation
};