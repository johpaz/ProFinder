const { Client } = require("../db.js")


const createClient = async (name, email, image, genre, description) => {

    if (!name || !email || !image || !genre || !description) {
        throw Error("Faltan datos a completar")
    }
    else {
        const newClient = await Client.create({
            name,
            email,
            image,
            genre,
            description,
            active: true,
            pro: true
        });
        return newClient
    }

};

module.exports = createClient;