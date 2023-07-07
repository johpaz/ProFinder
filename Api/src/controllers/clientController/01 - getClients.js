const { Client, Post } = require("../../db.js")



const getClients = async () => {
    const clients = await Client.findAll({
        where: {
            softDelete: null
        },
        include: {
            model: Post,
            attributes: ['id', "title", "image", "content"],
        }
    });

    if (!clients) throw Error(`No hay clientes a mostrar`);

    return clients;
}



module.exports = getClients