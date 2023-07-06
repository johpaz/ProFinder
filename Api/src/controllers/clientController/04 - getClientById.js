const { Client, Post } = require("../../db.js");

const getClientById = async (id) => {
    return await Client.findByPk(id, {
        include: {
            model: Post,
            attributes: ["title", "image", "content"]
        }
    })
};

module.exports = getClientById;

