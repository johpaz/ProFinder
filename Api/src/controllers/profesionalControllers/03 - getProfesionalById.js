const { Profesional } = require('../../db');
const { Category } = require('../../db');
const { Ocupation } = require('../../db');
const { Country,Location } = require('../../db');
const { ProfesionalImagesPost } = require('../../db');
const { PostProfesional } = require("../../db");

const cleanArrayProfesionalId = require('../../helpers/cleanArrayProfesionalById');

const getProfesionalById = async (id) => {
  const parseNumber = Number(id);
  if (!Number(id)) throw Error(`El id debe ser numérico!`);

  const profesional = await Profesional.findByPk(parseNumber, {
    include: [
      {
        model: Category,
        attributes: ["id", "name"],
        through: { attributes: [] } 

      },
      {
        model: Ocupation,
        attributes: ["id", "name","CategoryId"],
        through: { attributes: [] } 
      },
      {
        model: Country,
        attributes: ["id", "name"],
      },
      {
        model: Location,
        attributes: ["id", "name","CountryId"],
      },
      {
        model: ProfesionalImagesPost,
        attributes: ["image", "description"],
      },
      {
        model: PostProfesional,
        attributes: ["id", "title", "image", "content"]
      }
    ]
  });

  if (!profesional) throw Error(`No existe el profesional de id: ${id}`);
  // console.log(profesional.Ocupations.map((ocupation)=>({
  //   id: ocupation.id,
  //   name: ocupation.name,
  //   CategoryId: ocupation.CategoryId,
  // })))
  // console.log(profesional.Categories.map((category)=> ({
  //   id: category.id,
  //   name: category.name
  // })))
  // console.log(profesional.Country.dataValues)
  // console.log(profesional.Location.dataValues)
  // const countryPro = profesional.Country.dataValues.name
  // console.log(countryPro)
  // console.log(profesional.Location.dataValues.name)

  const formattedProfesional = cleanArrayProfesionalId(profesional);
  // return profesional;
  return formattedProfesional;
};

module.exports = getProfesionalById;