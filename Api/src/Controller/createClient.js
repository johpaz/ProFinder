const { Client } = require("../src/db.js")


const createClient = async (infoClient) => {
    const clientCreated = await Client.create(infoClient)
    return "Cliente creado con exito"
}

module.exports = createClient;