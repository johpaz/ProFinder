
const { Op } = require("sequelize");
const { Profesional, sequelize } = require('../../db');
const {Ocupation}= require ('../../db')
const { QueryTypes } = require('sequelize');
const Category = require("../../db");
const {ProfesionalCategory}= require('../../db');


const searchUserProfesional=async (name)=>{
    const dbInf= await Profesional.findAll({
        where:{
            name:{
                [Op.iLike]: `%${name}%`
            }
        }
    });
    return dbInf
};


const getAllProfesionals=async ()=>{
    const allProf= await Profesional.findAll({//añadir que solo lo devuelva si soft delete es null
    where:{ 
        softDelete: null}
        }
      )
    return allProf
};



const getProfById= async (id)=>{

const dbProf= await sequelize.query(
    `UPDATE "Profesionals" set "softDelete"=true where id=${id}`//Cuando la propiedad softDelete esta en true quiere decir que no se mostrara dentro de los Supplier, se elimina logicamente, lo cual quiere decir que no se podra ver en el Front dentro de los professionales pero seguira estando disponible en la base de datos
);

if (dbProf.length!==0){return ("The professional was deleted successfully")}

}




module.exports= {searchUserProfesional,
    getAllProfesionals,
    getProfById
}