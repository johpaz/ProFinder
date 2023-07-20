const { Profesional, Client } = require('../../db');
const { sequelize } = require('../../db')

const getContactById = async (id) => {
  const client = await Client.findByPk(id,{
    include: {
      model: Profesional,
      attributes: ["id", "name", "email", "image"],
      through: { attributes: [] }
    },
    where: sequelize.where(
      sequelize.col('Profesionals.id'),
      'IS NOT', // Puedes cambiar 'IS NOT' a 'IS' si deseas obtener solo los que tienen asociaciones vacías (sin profesionales).
      null
    )
  });

  if(!client) throw Error(`No se encontró el cliente de id ${id} relacionado con profesionales`);

  return client;
};

module.exports = getContactById;