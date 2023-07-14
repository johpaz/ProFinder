const {Country,Location} = require('../db');

const cleanArray = async (profesionals) => {

  const countries = await Country.findAll();
  const locations = await Location.findAll();
  return profesionals.map((profesional) => {
    // console.log(profesional.dataValues);
    const country = countries.find((country) => country.id === profesional.CountryId)?.name;
    const location = locations.find((location) => location.id === profesional.LocationId)?.name;
    console.log(country)
    console.log(location);


    const professions = profesional.Categories.map((category) => {
      const ocupations = profesional.Ocupations.filter((ocupation) => ocupation.CategoryId === category.id);
      return {
        id: category.id,
        category: category.name,
        ocupations: ocupations.map((ocupation) => ({
          id: ocupation.id,
          name: ocupation.name
        }))
      };
    });
  return {
    id: profesional.id,
    name: profesional.name,
    email: profesional.email,
    password: profesional.password,
    image: profesional.image,
    rating: profesional.rating,
    genre: profesional.genre,
    years_exp: profesional.years_exp,
    phone: profesional.phone,
    ubication: {
      country: country,
      location: location,
    },
    professions: professions,
    posts: profesional.PostProfesionals
  };
  });
};

module.exports = cleanArray;// 4ef29225941cb9bb0ea93f9cae9b3bcb614f46f8