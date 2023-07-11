const createOcupation = require('./03 - createOcupation');
const { getAllOcupations, getOcupationsByName,getAllOcupationApi} = require('./01 - getOcupations');
const updateOcupation = require('./04 - putOcupation');
const getOcupationById = require('./02 - getOcupationById');
const getPresionalsByOcupation = require ('./05 - getPresionalsByOcupation');
const getAllProfesionals = require ('./06 - getAllProfesionals')
const getMessage= require ('./07 - getMessage')
const getOcupationsByOcupation= require ('./08 - getOcupationsByOcupation')


module.exports = {
  getAllOcupations, getOcupationsByName,getAllOcupationApi,
  getOcupationById,
  createOcupation,
  updateOcupation,
  getPresionalsByOcupation,
  getAllProfesionals,
  getMessage,
  getOcupationsByOcupation
};