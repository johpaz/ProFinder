const { Profesional } = require('../../db');
const { Category } = require('../../db');
const { Ocupation } = require('../../db');
const { PostProfesional } = require("../../db")
const cleanArray = require('../../helpers/cleanArrayProfesionals');

const axios = require('axios');


const getAllProfesionalApi = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/johpaz/ApiProfinder/master/src/json/profesionales.json');
    const apiData = response.data;

    console.log(apiData);

    // Mapear los datos de la API en el formato esperado por el modelo de Sequelize
    const normalizedProfessionals = apiData.profesionales.map(apiProfessional => {
      const normalizedProfessional = {
        name: apiProfessional.name ? apiProfessional.name.trim().slice(0, 40) : '',
        email: apiProfessional.email ? apiProfessional.email.trim() : '',
        phone: apiProfessional.phone ? apiProfessional.phone.replace(/\D/g, "").slice(0, 10) : '',
        image: apiProfessional.image ? apiProfessional.image.trim() : '',
        genre: apiProfessional.genre ? apiProfessional.genre.trim() : '',
        rating: apiProfessional.rating && !isNaN(apiProfessional.rating) ? Math.min(parseFloat(apiProfessional.rating), 5) : null,
        description: apiProfessional.description ? apiProfessional.description.trim() : '',
        ubication: apiProfessional.ubicacion ? apiProfessional.ubicacion.trim().slice(0, 50) : '',
        years_exp: apiProfessional.years_exp ? apiProfessional.years_exp.trim() : '',
        categorias: Array.isArray(apiProfessional.categorias) ? apiProfessional.categorias.map(categoria => categoria.nombre.trim()) : [],
        profesiones: Array.isArray(apiProfessional.profesiones) ? apiProfessional.profesiones.map(profesion => profesion.name.trim()) : []
      };

      return normalizedProfessional;
    });

    console.log(normalizedProfessionals);

    // Crear todos los profesionales de una sola vez en la base de datos
    await Profesional.bulkCreate(normalizedProfessionals);

    console.log('Base de datos llenada exitosamente con los profesionales.');
  } catch (error) {
    console.error('Error al llenar la base de datos con los profesionales:', error.message);
  }
};


const getAllProfesionals = async () => {
  try {
    let profesionals = await Profesional.findAll({
      include: [
        {
          model: Category,
          attributes: ["id", "name"],
          through: { attributes: [] }
        },
        {
          model: Ocupation,
          attributes: ["id", "name", "CategoryId"],
          through: { attributes: [] }
        },
        {
          model: PostProfesional,
          attributes: ["title", "image", "content"],
        }
      ]
    });

    if (profesionals.length === 0) {
      await getAllProfesionalApi();
      profesionals = await Profesional.findAll({
        include: [
          {
            model: Category,
            attributes: ["id", "name"],
            through: { attributes: [] }
          },
          {
            model: Ocupation,
            attributes: ["id", "name", "CategoryId"],
            through: { attributes: [] }
          },
          {
            model: PostProfesional,
            attributes: ["title", "image", "content"],
          }
        ]
      });
    }

    if (profesionals.length === 0 || !profesionals) throw Error(`No hay profesionales a buscar`);

    const cleanedArray = cleanArray(profesionals);

    return cleanedArray;
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = { getAllProfesionals, getAllProfesionalApi };
