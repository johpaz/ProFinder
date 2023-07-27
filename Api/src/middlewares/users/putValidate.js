const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if(typeof email !== "string") throw Error(`El tipo de dato de email debe ser un string`);
    if(email.trim() === "") throw Error(`El email no puede estar vacío`);
    if(!emailRegex.test(email)) throw Error (`El email debe tener un formato de email - ejemplo: usuario@gmail.com`);
    //if(!emailRegexEnd.test(emailEnd)) throw Error(`El email no puede tener números o símbolos luego del dominio`)
  };

const validatePassword = (password) => {
    if (!password) throw Error(`La contraseña es obligatoria`);
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)\S{6,15}$/;
    if (typeof password !== "string") throw Error(`El tipo de dato de la contraseña debe ser un string`);
    if (password.trim() === "") throw Error(`La contraseña no puede estar vacía o compuesta por espacios`);
    if (!passwordRegex.test(password)) throw Error(`La contraseña debe contener al menos una letra y un número, además de tener una longitud entre 6 y 15 caracteres`);
};


module.exports = async (req, res, next) => {
    const { email,password } = req.body;
    try {
        validateEmail(email)
        validatePassword(password);
        next();
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};