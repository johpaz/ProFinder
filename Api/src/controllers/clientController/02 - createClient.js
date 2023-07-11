const { Client } = require("../../db.js")


const createClient = async (name, email, phone, image, genre, description, ubication) => {

    if (!name || !email || !image || !genre || !description || !phone || !ubication) {
        throw Error("Faltan datos a completar")
    }
    else {
        const newClient = await Client.create({
            name,
            email,
            phone,
            image,
            genre,
            description,
            ubication,
            rating: 0,
            active: true,
            pro: false,
            softDelete: null
        });
        return newClient
    }

};

module.exports = createClient;