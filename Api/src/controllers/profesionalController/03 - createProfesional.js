const { Profesional } = require('../../db');

const createProfesional = async ( name, email, image, genre, years_exp, description ) => {

  const newProfesional = await Profesional.create({ 
    name,
    email,
    image,
    genre, 
    years_exp,
    description,
    active: true,
    pro: true 
  });
  
  if(!newProfesional || newProfesional.length === 0) throw Error (`No se pudo crear al profesional llamado: ${name}`);

  return newProfesional;
};

module.exports = createProfesional;
