//Controllers
const createPost = require("../controllers/postsClientControllers/03 - createPost")
//Handlers

const createPostHandler = async (req, res) => {
    const { title, image, content, clientId } = req.body
    try {
        const post = await createPost(title, image, content, clientId)
        return res.status(200).json(post)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createPostHandler
}