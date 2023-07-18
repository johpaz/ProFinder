const { PostProfesional } = require('../../db');
const { Category } = require('../../db');
const { Ocupation } = require('../../db');
const { getImageUrl } = require('../../firebase');

const updatePostProfesional = async (id, title, image, content, profesionalId, categories, ocupations) => {
  if (!id) throw Error(`El id es obligatorio`);

  const profesionalPostUpdate = await PostProfesional.findByPk(id, {
    include: [
      {
        model: Category,
        attributes: ["id", "name"],
        through: { attributes: [] }
      },
      {
        model: Ocupation,
        attributes: ["id", "name", "CategoryId"],
        through: { attributes: [] }
      }
    ]
  });

  if (!profesionalPostUpdate) throw Error(`No existe el post del profesional de id: ${id}`);

  // Match ocupations

  const ocupationsFormat = ocupations.map(async (ocupationName) => {
    const ocupationsInBDD = await Ocupation.findOne({ where: { name: ocupationName } });
    if (!ocupationsInBDD) throw Error(`No existe la ocupación llamada: ${ocupationName} en la base de datos`);
    return {
      id: ocupationsInBDD.id,
      name: ocupationsInBDD.name,
      categoryId: ocupationsInBDD.CategoryId,
    };
  });

  const resolvedOcupations = await Promise.all(ocupationsFormat);

  // Match categories
  const categoriesFormat = categories.map(async (categoryName) => {
    const categoriesInBDD = await Category.findOne({ where: { name: categoryName } });
    if (!categoriesInBDD) throw Error(`Las categorías ${categoryName} no existen en la base de datos`);

    const categoryOcupations = resolvedOcupations.filter((ocupation) => ocupation.categoryId === categoriesInBDD.id);

    return {
      id: categoriesInBDD.id,
      name: categoriesInBDD.name,
      ocupations: categoryOcupations.map((ocupation) => ({ id: ocupation.id, name: ocupation.name }))
    };
  });
  const resolvedCategories = await Promise.all(categoriesFormat);

  const imageUrl = await getImageUrl(image);
  console.log("--URL image---")
  console.log(imageUrl);
  const domain = "https://firebasestorage.googleapis.com";

  // Update postProfesional
  profesionalPostUpdate.title = title || profesionalPostUpdate.title;
  profesionalPostUpdate.category = category || profesionalPostUpdate.category;
  profesionalPostUpdate.ocupation = ocupation || profesionalPostUpdate.ocupation;
  profesionalPostUpdate.image = imageUrl || profesionalPostUpdate.image;
  profesionalPostUpdate.content = content !== undefined ? content : profesionalPostUpdate.content;
  profesionalPostUpdate.profesionalId = profesionalId || profesionalPostUpdate.profesionalId;

  await profesionalPostUpdate.save();
  // Set associations
  console.log(profesionalPostUpdate);
  const categoriesBDD = await Category.findAll({
    where: {
      name: {
        [Op.in]: resolvedCategories.map((category) => category.name)
      }
    }
  });

  const ocupationsBDD = await Ocupation.findAll({
    where: {
      name: {
        [Op.in]: resolvedOcupations.map((ocupation) => ocupation.name)
      }
    }
  });

  await profesionalPostUpdate.setCategories(categoriesBDD);
  await profesionalPostUpdate.setOcupations(ocupationsBDD);
  console.log(profesionalPostUpdate);
  return {
    id: profesionalPostUpdate.id,
    title: profesionalPostUpdate.title,
    category: profesionalPostUpdate.category,
    ocupation: profesionalPostUpdate.ocupation,
    image: profesionalPostUpdate.image,
    content: profesionalPostUpdate.content,
    profesionalId: profesionalPostUpdate.profesionalId
  }
};


module.exports = updatePostProfesional;
