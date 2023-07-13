// Controllers:

const { getCountries, createCountry} = require('../controllers/countryControllers/index');

// Handlers:

const getAllCountries = async (req,res) => {
  try {
    const countries = await getCountries()
    return res.status(200).json(countries)
  } catch (error) {
    return res.status(404).json({error: error.message});
  };
};

const postCountry = async (req,res) => {
  const { name } = req.body;
  console.log(name)
  // return res.status(201).json({DIY:`Se creará el país de nombre: ${name}`})
  try {
    const newCountry = await createCountry(name);
    console.log(newCountry.dataValues)
    return res.status(201).json({countryCreated: newCountry});
  } catch (error) {
    return res.status(404).json({error: error.message});
  }
};

module.exports = {
  getAllCountries, postCountry
}