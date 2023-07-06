const { Post } = require("../../db.js")


const getAllPostsByClients = async () => {
    return await Post.findAll()
}

module.exports = getAllPostsByClients