const { PostProfesional } = require("../../db.js")
const axios = require('axios');

const getAllPostsByProfesionalsApi = () => {
    return axios.get('https://raw.githubusercontent.com/johpaz/ApiProfinder/master/src/json/postsProfesionals.json')
    .then((response)=>{
      const postProfesional = response.data.postprofesional;
      const promises = postProfesional.map((post)=>{
        const postFormat = {
          title: post.title,
          image: post.image,
          content: post.content,
          ProfesionalId: post.profesionalId,
        };
        return PostProfesional.findOrCreate({where:postFormat})
      });

      return Promise.all(promises)
      .then(()=>{
        const postProfesionals = PostProfesional.findAll();
        return postProfesionals
      });
    })
    .catch((error)=>{
      throw Error (error.message)
    })
  };
  

const getAllPostsByProfesionals = async () => {
    const posts = await PostProfesional.findAll()
    if (!posts) {
        throw Error("Hubo un error a la hora de mostrar los posteos")
    }
    return posts
}

module.exports = {
    getAllPostsByProfesionals,
    getAllPostsByProfesionalsApi
}