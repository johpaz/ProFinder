const { Profesional } = require('../../db');
const { Client } = require('../../db');

const validateId = (id) => {
  if(!id || id === undefined || id === null) throw Error(`El id es obligatorio para editar un profesional`);
  if(!Number(id)) throw Error(`Compruebe los datos para registrarse`);
};

const validateName = (name) => {
  if(typeof name !== "string") throw Error(`El tipo de dato de name debe ser un string`);

  const namevalidated = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(name.trim());
  const firstNameLastName = name.split(" ");
  
  if(name.trim() === "") throw Error(`El nombre no puede estar vacío`);
  if(/\d/.test(name)) throw Error(`El nombre no puede contener números`);
  if(!namevalidated) throw Error(`El nombre no puede contener expresiones especiales o símbolos`);
  if(firstNameLastName.length < 1) throw Error('El nombre de usuario debe estar conformado por nombre y apellido');
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailRegexEnd = /^[a-zA-ZñÑ\s]+$/;
  const emailEnd = email.split(".")[1];
  if(typeof email !== "string") throw Error(`El tipo de dato de email debe ser un string`);
  if(email.trim() === "") throw Error(`El email no puede estar vacío`);
  if(!emailRegex.test(email)) throw Error (`El email debe tener un formato de email - ejemplo: usuario@gmail.com`);
  if(!emailRegexEnd.test(emailEnd)) throw Error(`El email no puede tener números o símbolos luego del dominio`)
};
 

const validateGenre = (genre) => {
  const genrevalidated = /^[a-zA-ZñÑ\s]+$/.test(genre.trim());
  if(typeof genre !== "string") throw Error(`El tipo de dato de genre debe ser un string`);
  if(genre.trim() === "") throw Error(`El género no puede estar vacío`);
  if(!genrevalidated) throw Error(`El género no puede contener caracteres especiales como números o símbolos`);
};

const validateYearsExp = (years_exp) => {
  if(typeof years_exp !== "string") throw Error (`El tipo de dato de los años de experiencia debe ser un string`);
  if(years_exp > 85) throw Error(`No es probable que haya trabajado más de 85 años en un trabajo`);
  if(years_exp.length > 2) throw Error(`Los años de experiencia no puede ser centenares`);
};

const validateCategories = (categories) => {
  if(!Array.isArray(categories)) throw Error(`El tipo de dato de categories debe ser un array`);
  if(categories.length === 0) throw Error (`El profesional debe tener al menos una categoría`);
  if(categories.length > 0 && categories.length > 3) throw Error(`El profesional no puede tener más de 3 categorías`);
};

const validateOcupations = (ocupations) => {
  if(!Array.isArray(ocupations)) throw Error(`El tipo de dato de ocupations debe ser un array`);
  if(ocupations.length === 0) throw Error(`El profesional debe tener al menos una ocupación`);
  if(ocupations.length > 0 && ocupations.length > 5) throw Error(`El profesional no puede tener más de 5 ocupaciones`);
};

const validatePhone = (phone) => {
   if(typeof phone !== "string") throw Error(`El tipo de dato de phone debe ser un string`);
   if(!/^\d+$/.test(phone)) throw Error(`La propiedad phone solo debe contener números`)
};


module.exports = async (req,res,next) => {
  const { id } = req.params;
  const { name, email, password,image, genre, years_exp, categories, ocupations, phone, ubication, CountryId, LocationId } = req.body;
  try {
    validateId(id);
    validateEmail(email);
    const profesional = await Profesional.findByPk(id);
    const profesionalEmail = await Profesional.findOne({where:{email: email}});
    const clientEmail = await Client.findOne({where:{email:email}});

    if(email !== profesional.email){
      if(profesionalEmail || clientEmail) throw Error(`El correo ${email} ya está en uso, pruebe con otro`);
    };

    validateName(name);
    validatePassword(password);
    validateImage(image);
    validateGenre(genre);
    validateYearsExp(years_exp);
    validateCategories(categories);
    validateOcupations(ocupations);
    validatePhone(phone);
    // validateUbication(ubication);
    // validateCountry(CountryId);
    next();
  } catch (error) {
    return res.status(400).json({error: error.message});
  };
}