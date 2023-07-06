const { Sequelize } = require('sequelize');

// Importamos los modelos

const ProfesionalModel = require('./models/Profesional');
const OcupationModel = require('./models/Ocupation');
const ClientModel = require('./models/Client');
const PostModel = require('./models/Post');
const CategoryModel = require('./models/Category');
const PostProfesionalModel = require('./models/PostProfesional');
const ProfesionalImagesPostModel = require('./models/ProfesionalImagesPost');

// Credenciales

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

// Instanciamos sequelize

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{logging:false});

// Definimos los modelos -> usando una función que recibe una instancia de sequelize

ProfesionalModel(sequelize);
OcupationModel(sequelize);
ClientModel(sequelize);
PostModel(sequelize);
CategoryModel(sequelize);
PostProfesionalModel(sequelize);
ProfesionalImagesPostModel(sequelize);

// Destructuring de los modelos para vincularlos -> sequelize.models

const {Profesional, Category, Ocupation, Client, Post, PostProfesional, ProfesionalImagesPost } = sequelize.models;

// Relacionar los modelos n:n

Profesional.belongsToMany(Category,{through:"ProfesionalCategory"});
Category.belongsToMany(Profesional,{through:"ProfesionalCategory"});

// Relacionar los modelos 1:n

Client.hasMany(Post);

Post.belongsTo(Client);

Profesional.hasMany(PostProfesional);

PostProfesional.belongsTo(Profesional);

Profesional.hasMany(ProfesionalImagesPost);

ProfesionalImagesPost.belongsTo(Profesional);

//?
Category.hasMany(Ocupation);

Ocupation.belongsTo(Category);

// Relacionar ambos modelos:

Profesional.belongsToMany(Client,{through:"ProfesionalClientRelation"});
Client.belongsToMany(Profesional,{through:"ProfesionalClientRelation"});

module.exports = {
  sequelize,
  ...sequelize.models
};