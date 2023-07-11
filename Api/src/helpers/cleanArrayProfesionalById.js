const cleanArrayProfesionalId = (profesionalId) => {
  return profesionalId.map((profesional) => {
    const professions = profesional.Categories.map((category) => {
      const ocupations = profesional.Ocupations.filter((ocupation) => ocupation.CategoryId === category.id);
      return {
        id: category.id,
        category: category.name,
        ocupations: ocupations.map((ocupation) => ({ 
          id: ocupation.id,
          name: ocupation.name 
        }))
      };
    });

    return {
      id: profesional.id,
      name: profesional.name,
      email: profesional.email,
      image: profesional.image,
      genre: profesional.genre,
      rating: profesional.rating,
      years_exp: profesional.years_exp,
      description: profesional.description,
      phone: profesional.phone,
      ubication: profesional.ubication,
      professions: professions,
      jobimages: profesional.ProfesionalImagesPosts
    };
  });
};

module.exports = cleanArrayProfesionalId;