const { Country } = require('../../db');

const createCountry = async (name) => {
  const nameCountryFormat = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const newCountry = await Country.create({name: nameCountryFormat});
  console.log(newCountry);

  return newCountry;
}

module.exports = createCountry