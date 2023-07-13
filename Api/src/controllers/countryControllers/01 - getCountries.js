const { Country } = require('../../db');
const { Location } = require('../../db');

const getCountries = async() => {
  const countries = await Country.findAll({include:{
      model: Location,
      attributes:[ "id","name"]
    }});

  return countries
}

module.exports = getCountries;