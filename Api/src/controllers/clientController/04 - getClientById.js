const { Client, Post } = require("../../db.js");

const getClientById = async (id) => {
    const searchClient = await Client.findByPk(id, {
        include: {
            model: Post,
            attributes: ["title", "image", "content"]
        }
    })
    if (searchClient) return searchClient
    else if(error)
    {throw error}
        
        //(`No existe un cliente con id ${id}`)}
  //  else {}

    
};



module.exports = getClientById;

