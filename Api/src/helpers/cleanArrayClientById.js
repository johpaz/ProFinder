const cleanArrayClientById = (client)=>{
    return {
      id: client.id,
      name: client.name,
      email: client.email,
      image: client.image,
      rating: client.rating,
      description: client.description,
      genre: client.genre,
      ubication: client.ubication,
      Post: client.Posts
    };
};

module.exports = cleanArrayClientById;