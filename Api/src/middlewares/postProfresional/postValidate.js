const { Profesional } = require("../../db.js")


const validateTitle = (title) => {
    if (!title) {
        throw Error("La propiedad title no puede estar vacia.")
    };
    if (typeof title !== "string") {
        throw Error("El tipo de dato de title debe ser un string")
    }
    let regexTitle = /^[a-zA-ZñÑ\s]+$/
    if (!regexTitle.test(title)) {
        throw Error("El titulo no puede contener numeros, caracteres especiales, etc.")
    };
}

const validateImage = (image) => {
    if (!image) {
        throw Error("Por favor ingrese la url de una imagen.");
    }
    if (typeof image !== "string") {
        throw Error("El tipo de dato de image debe ser un string.")
    }
    const regexImage = /(https?:\/\/.*\.(?:jpg|jpeg|gif|png|svg))/i
    if (!regexImage.test(image)) {
        throw Error("La imagen debe ser una url y debe tener formato jpg|jpeg|gif|png|svg ")
    };
};

const validateContent = (content) => {
    if (typeof content !== 'string') {
        throw new Error('El contenido debe ser una cadena de texto');
    }
    if (content.length > 1000) {
        throw new Error('El contenido no puede exceder los 1000 caracteres');
    }
    if (/^\d+$/.test(content)) {
        throw new Error('El contenido no puede consistir solo de números');
    }
    const regexContent = /^[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/
    if (regexContent.test(content)) {
        throw new Error('El contenido no puede consistir solo de símbolos');
    }
}

const validateIdProfesional = (profesionalId) => {
    if (!profesionalId) throw Error("El posteo debe estar relacionado con el id de un profesional válido.")
    // if(/\d/.test(profesionalId)) throw Error(``)
}



module.exports = async (req, res, next) => {
    const { title, image, content, profesionalId } = req.body
    try {
        validateIdProfesional(profesionalId);
        const profesionalFound = await Profesional.findByPk(profesionalId)
        if (!profesionalFound) throw Error(`No existe un profesional que tenga el id ${profesionalId}`);
        validateTitle(title);
        validateImage(image);
        validateContent(content);
    } catch (error) {
        return res.status(400).json({error: error.message});
    };
    next()
}