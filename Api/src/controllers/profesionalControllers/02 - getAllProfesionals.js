const { Profesional } = require('../../db');
const { Category } = require('../../db');
const { Ocupation } = require('../../db');
const cleanArray = require('../../helpers/cleanArrayProfesionals');

const getAllProfesionals = async () => {

  const profesionals = await Profesional.findAll({
    include: [
      {
        model: Category,
        attributes: ["id","name"],
        through: { attributes: [] }
      },
      {
        model: Ocupation,
        attributes: ["id","name","CategoryId"],
        through: { attributes: [] }
      }
    ]
  });

  if(profesionals.length === 0 || !profesionals) throw Error(`No hay profesionales a buscar`);

  // const formattedProfesionals = profesionals.map((profesional)=>cleanArray(profesionals));
  const cleanedArray = cleanArray(profesionals);
  
  return cleanedArray;
};

module.exports = getAllProfesionals;