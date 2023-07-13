// const validateGenre = (genre) => {
//     if (typeof genre !== "string") {
//         throw Error("El tipo de dato de genre debe ser un string")
//     };
//     const genres = ["Male", "Female"]
//     if (!genres.includes(genre)) {
//         throw Error("Eliga un genero correcto.")
//     };
// };

// const validateDescription = (description) => {
//     if (typeof description !== "string") {
//         throw Error("El tipo de dato de description debe ser un string.")
//     }
//     if (description.length > 150) {
//         throw Error("La descripcion no puede contar con mas de 150 caracteres.")
//     };
// };

// const validateUbication = (ubication) => {
//     if (typeof ubication !== "string") {
//         throw Error("El tipo de dato de ubication debe ser un string.");
//     };
// };

// const validateImage = (image) => {

//     const regexImage = /(https?:\/\/.*\.(?:jpg|jpeg|gif|png|svg))/i
//     if (!regexImage.test(image)) {
//         throw Error("La imagen debe ser una url y debe tener formato jpg|jpeg|gif|png|svg ")
//     }

// };