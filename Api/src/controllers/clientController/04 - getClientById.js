const { Client, Post } = require("../../db.js");

const getClientById = async (id) => {
    const searchClient = await Client.findByPk(id, {
        include: {
            model: Post,
            attributes: ["title", "image", "content"]
        }
    })
    if (!searchClient) throw Error(`No existe un cliente con id ${id}`)
};



module.exports = getClientById;

