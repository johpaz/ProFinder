const { Ocupation } = require('../../db');
const { Op } = require('sequelize');

const getAllOcupations = async () => {

  const ocupations = await Ocupation.findAll();

  if(!ocupations || ocupations.length === 0) throw Error (`No hay ocupaciones a mostrar`);

  return ocupations;
};

const getOcupationsByName = async (name) => {

  const query = name.toLowerCase().trim();
  const formattedQuery = `%${query}%`

  const ocupacionsName = await Ocupation.findAll({
    where:{
      name:{
        [Op.iLike] : formattedQuery,
      },
    },
  });

  if(ocupacionsName.length === 0) throw Error (`No hay ocupaciones llamadas: ${query}`);

  return ocupacionsName;
};

module.exports = {
  getAllOcupations, getOcupationsByName
};