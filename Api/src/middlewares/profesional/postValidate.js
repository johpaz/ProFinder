const validateName = (name) => {
  const namevalidated = /^[a-zA-ZñÑ\s]+$/.test(name);
  const firstNameLastName = name.split(" ");
  
  if(typeof name !== "string") throw Error(`El tipo de dato de name debe ser un string`);
  if(name.trim() === "") throw Error(`El nombre no puede estar vacío`);
  if(!namevalidated) throw Error(`El nombre no puede contener expresiones especiales o símbolos`);
  if(firstNameLastName.length < 1) throw Error('El nombre de usuario debe estar conformado por nombre y apellido');
};

const validateEmail = (email) => {
  const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if(typeof email !== "string") throw Error(`El tipo de dato de email debe ser un string`);
  if(email.trim() === "") throw Error(`El email no puede ser un string`);
  if(!emailregex.test(email)) throw Error (`El email debe tener un formato de email - ejemplo: usuario@gmail.com`);
};

const validateImage = (image) => {
  if(typeof image !== "string") throw Error(`El tipo de dato de image debe ser un string`);
  const imageRegexUrl = /^(http(s?):\/\/)?[^\s/$.?#].[^\s]*\.(?:jpg|jpeg|gif|png)$/i
  if(image.trim() === "") throw Error(`La imagen no puede ser un string vacío`)
  if(!imageRegexUrl.test(image)) throw Error (`La imagen debe ser una url y tener formato de imagen: .jpg|.jeg|.png`); 
};

const validateGenre = (genre) => {};

const validateYearsExp = (years_exp) => {};

const validateDescription = (description) => {};

const validateCategories = (categories) => {};

const validateOcupations = (ocupations) => {};

const validatePhone = (phone) => {};

const validateUbication = (ubication) => {};

module.exports = (req,res,next) => {

  const { name, email, image, genre, years_exp, description ,categories, ocupations, phone, ubication } = req.body;

  try {
    validateName(name);
    validateEmail(email);
    validateImage(image);
    validateGenre(genre);
    validateYearsExp(years_exp);
    validateDescription(description);
    validateCategories(categories);
    validateOcupations(ocupations);
    validatePhone(phone);
    validateUbication(ubication);
    next();
} catch (error) {
  return res.status(400).json({error: error.message});
}
};
 // if (!name) {
 //   return res.status(400).json({ error: 'Falta la propiedad name' });
 // }

 // if (!email) {
 //   return res.status(400).json({ error: 'Falta la propiedad email' });
 // }

 // if (!image) {
 //   return res.status(400).json({ error: 'Falta la propiedad image' });
 // }

 // if (!genre) {
 //   return res.status(400).json({ error: 'Falta la propiedad genre' });
 // }

 // if (!years_exp) {
 //   return res.status(400).json({ error: 'Falta la propiedad years_exp' });
 // }

 // if (!description) {
 //   return res.status(400).json({ error: 'Falta la propiedad description' });
 // }
