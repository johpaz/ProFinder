const { Profesional } = require('../../db');
const { Category } = require('../../db');
const { Ocupation } = require('../../db');
const { Country } = require('../../db');
const { Location } = require('../../db');
const { PostProfesional } = require("../../db")
const { Review } = require("../../db")
const cleanArray = require('../../helpers/cleanArrayProfesionals');

const axios = require('axios');


// const getAllProfesionalApi = async () => {
//   try {
//     const response = await axios.get('https://raw.githubusercontent.com/johpaz/ApiProfinder/master/src/json/profesionales.json');
//     const apiData = response.data
//     // console.log(apiData)
//     // console.log(apiData.profesionales.map((profesional)=>profesional.categorias))
//     // console.log(apiData.profesionales.map((profesional)=>profesional.profesiones))

//     // Mapear los datos de la API en el formato esperado por el modelo de Sequelize
//     const normalizedProfessionals = apiData.profesionales.map(apiProfessional => {
//       const nameParts = apiProfessional.name ? apiProfessional.name.trim().split('.') : [];
//       const name = nameParts.length > 1 ? nameParts.slice(1).join('.').trim() : apiProfessional.name.trim();

//       const normalizedProfessional = {

//         name: name.slice(0, 40),
//         email: apiProfessional.email ? apiProfessional.email.trim() : '',
//         phone: apiProfessional.phone ? apiProfessional.phone.replace(/\D/g, "").slice(0, 10) : '',
//         password: apiProfessional.password,
//         image: apiProfessional.image ? apiProfessional.image.trim() : '',
//         genre: apiProfessional.genre ? apiProfessional.genre.trim() : '',
//         rating: apiProfessional.rating && !isNaN(apiProfessional.rating) ? Math.min(parseFloat(apiProfessional.rating), 5) : null,
//         description: apiProfessional.description ? apiProfessional.description.trim() : '',
//         ubication: apiProfessional.ubicacion ? apiProfessional.ubicacion.trim().slice(0, 50) : '',
//         years_exp: apiProfessional.years_exp ? apiProfessional.years_exp.trim() : '',
//         categorias: apiProfessional.categorias.map(categoria => categoria.nombre.trim()),
//         profesiones: apiProfessional.profesiones.map(profesion => profesion.name.trim()),
//         CountryId: apiProfessional.CountryId,
//         LocationId: apiProfessional.LocationId,
//       };

//       return normalizedProfessional;
//     });

//     // console.log(normalizedProfessionals);
//     // console.log(normalizedProfessionals.map((profesional)=>profesional))

//     // Crear todos los profesionales de una sola vez en la base de datos
//     for (const normalizedProfessional of normalizedProfessionals) {
//       const { categorias, profesiones, CountryId, LocationId } = normalizedProfessional;

//       const newProfesional = await Profesional.create(normalizedProfessional);

//       const categoriesBDD = await Category.findAll({ where: { name: categorias } });
//       await newProfesional.addCategories(categoriesBDD);

//       const ocupationsBDD = await Ocupation.findAll({ where: { name: profesiones } });
//       await newProfesional.addOcupations(ocupationsBDD);

//       const country = await Country.findByPk(CountryId);
//       await newProfesional.setCountry(country);
//       const location = await Location.findByPk(LocationId);
//       await newProfesional.setLocation(location);
//     }
//     // { id: 1, name: 'Programador', CategoryId: 1 }
//     console.log('Base de datos llenada exitosamente con los profesionales.');
//   } catch (error) {
//     console.error('Error al llenar la base de datos con los profesionales:', error.message);
//   }
// };


const getAllProfesionalsDelete = async () => {
    console.log('hola')
    let profesionals = await Profesional.findAll()
return profesionals}


    //     {
    //         where: {
    //             softDelete: true},

    //   include: [
    //     {
    //       model: Category,
    //       attributes: ["id", "name"],
    //       through: { attributes: [] }
    //     },
    //     {
    //       model: Ocupation,
    //       attributes: ["id", "name", "CategoryId"],
    //       through: { attributes: [] }
    //     },
    //     {
    //       model: PostProfesional,
    //       attributes: ["id", "title",  "image", "content"]
    //     },
    //   ]
    // });

  

//     const cleanedArray = cleanArray(profesionals);

//     // return profesionals
//     return cleanedArray;

// };



module.exports = {getAllProfesionalsDelete };