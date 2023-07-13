const { Location } = require('../../db');

const getLocations = async () => {
  const locations = await Location.findAll();
  if(locations.length === 0) throw Error(`No hay localidades en la base de datos`);
  return locations;
};

module.exports = getLocations;