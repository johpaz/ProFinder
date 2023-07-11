
const { Op } = require("sequelize");
const { Profesional, sequelize } = require('../../db');
const { Ocupation } = require('../../db')
const { QueryTypes } = require('sequelize');
const { Category } = require("../../db");
const { ProfesionalCategory } = require('../../db');
const { PostProfesional } = require("../../db")



const cleanArray = (Array) => Array.map((elemento) => {

    const categories = [];
    for (var i = 0; i < elemento.Categories.length; i++) {
        var objeto = {
            category: elemento.Categories[i].name,
            ocupations: []
        };

        categories.push(objeto)
    }




    return {
        id: elemento.id,
        name: elemento.name,
        email: elemento.email,
        image: elemento.image,
        genre: elemento.genre,
        rating: elemento.rating,
        years_exp: elemento.years_exp,
        description: elemento.description,
        active: elemento.active,
        pro: elemento.pro,
        professions: categories,
        posts: elemento.PostProfesionals
    }
}
);











const searchUserProfesional = async (name) => {
    const dbInf = await Profesional.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    });
    
};


const getAllProfesionals = async () => {
    const allProf = await Profesional.findAll({
        include: [
            {
                model: Category,
                attributes: ["name"],
                through: [],
            },
            {
                model: Ocupation,
                attributes: ["name"],
                through: [],
            },
            {
                model: PostProfesional,
                attributes: ["id", "title", "image", "content"]
            }
        ]
    }
    )
    const profClean = cleanArray(allProf)
    return profClean
};








const getProfById = async (id) => {

    const dbProf = await sequelize.query(
        `UPDATE "Profesionals" set "softDelete"=true where id=${id}`//Cuando la propiedad softDelete esta en true quiere decir que no se mostrara dentro de los Supplier, se elimina logicamente, lo cual quiere decir que no se podra ver en el Front dentro de los professionales pero seguira estando disponible en la base de datos
    );

    if (dbProf.length !== 0) { return ("The professional was deleted successfully") }

}




module.exports = {
    searchUserProfesional,
    getAllProfesionals,
    getProfById
}